import React, { useMemo, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ActionPicker, { ScanAction } from "@/components/scan/ActionPicker";
import ProofSelector, { ProofMethod } from "@/components/scan/ProofSelector";
import CaptureArea from "@/components/scan/CaptureArea";
import SubmissionPreview from "@/components/scan/SubmissionPreview";

const Scan = () => {
  const url = new URL(window.location.href);
  const prefill = (url.searchParams.get("action") as ScanAction) || null;

  const [action, setAction] = useState<ScanAction>(prefill);
  const [method, setMethod] = useState<ProofMethod>(prefill === "transport" ? "qr" : "photo");
  const [file, setFile] = useState<File | null>(null);
  // Minimal meta removed per request

  const isValid = useMemo(() => {
    if (method === "photo" && !file) return false;
    return !!action;
  }, [method, file, action]);

  const handleSubmit = () => {
    // Placeholder for optimistic submission
    alert("Submission received (mock) ✔");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-8 sm:space-y-10 md:space-y-14">
        <header className="text-left space-y-3">
          <span className="pulse-chip">Scan</span>
          <h1 className="section-title mt-3">Log an eco-action</h1>
          <p className="section-subtitle">Choose an action, capture proof, and submit. Fast and clear.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-left">Pick your action</h2>
          <ActionPicker value={action} onChange={setAction} />
        </section>

        <section className="grid lg:grid-cols-5 gap-5 sm:gap-6">
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            <h2 className="text-xl font-semibold text-left">Add proof</h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <ProofSelector method={method} onChange={setMethod} />
            </div>
            <CaptureArea onFileSelect={setFile} />
          </div>
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 lg:sticky lg:top-24 self-start">
            <h2 className="text-xl font-semibold text-left">Preview & submit</h2>
            <SubmissionPreview
              action={action}
              method={method}
              quantity={""}
              unit={""}
              onSubmit={handleSubmit}
            />
            {!isValid && (
              <p className="text-sm text-red-600">Pick an action and add required proof to submit.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Scan;


