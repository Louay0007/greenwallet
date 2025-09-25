import React, { useEffect, useRef, useState } from "react";

interface CaptureAreaProps {
  onFileSelect: (file: File | null) => void;
}

const CaptureArea: React.FC<CaptureAreaProps> = ({ onFileSelect }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    onFileSelect(f ?? null);
    if (f) setPreview(URL.createObjectURL(f));
    else setPreview(null);
  };

  const supportsCamera = typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia;

  const startCamera = async () => {
    if (!supportsCamera) {
      inputRef.current?.click();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraActive(true);
      }
    } catch (err) {
      inputRef.current?.click();
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], `capture_${Date.now()}.jpg`, { type: "image/jpeg" });
      onFileSelect(file);
      const url = URL.createObjectURL(blob);
      setPreview(url);
      stopCamera();
    }, "image/jpeg", 0.9);
  };

  useEffect(() => () => stopCamera(), []);

  return (
    <div className="rounded-2xl border bg-white/80 overflow-hidden">
      <div className="w-full bg-gray-50 relative aspect-[4/3] sm:aspect-video max-h-[360px] sm:max-h-none">
        {cameraActive ? (
          <video ref={videoRef} className="w-full h-full object-cover" playsInline muted />
        ) : preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img src="/placeholder.svg" alt="Placeholder" className="w-24 sm:w-40 opacity-60" />
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 justify-between">
        {!cameraActive ? (
          <button type="button" onClick={startCamera} className="button-primary w-full sm:w-auto">Open Camera</button>
        ) : (
          <div className="flex w-full sm:w-auto gap-2">
            <button type="button" onClick={capturePhoto} className="button-primary w-full sm:w-auto">Capture Photo</button>
            <button type="button" onClick={stopCamera} className="button-secondary w-full sm:w-auto">Close</button>
          </div>
        )}
        <span className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-right">Live camera when supported; fallback to upload.</span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange} 
        className="hidden"
        capture="environment"
      />
    </div>
  );
};

export default CaptureArea;


