import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/main/Home";
import Quests from "./pages/quests/Quests";
import Scan from "./pages/scan/Scan";
import Submissions from "./pages/scan/Submissions";
import SubmissionDetailPage from "./pages/scan/SubmissionDetail";
import Challenges from "./pages/challenges/Challenges";
import ChallengeDetail from "./pages/challenges/ChallengeDetail";
import Impact from "./pages/impact/Impact";
import Rewards from "./pages/rewards/Rewards";
import Community from "./pages/community/Community";
import CommunityEventDetail from "./pages/CommunityEventDetail";
import CommunityClubDetail from "./pages/CommunityClubDetail";
import CommunityVolunteerDetail from "./pages/CommunityVolunteerDetail";
import CommunityPartnerDetail from "./pages/CommunityPartnerDetail";
import { DemoOne as SignIn } from "./pages/auth/signin";
import { DemoTwo as SignUp } from "./pages/auth/signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/submissions/:id" element={<SubmissionDetailPage />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/:id" element={<ChallengeDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/events/:id" element={<CommunityEventDetail />} />
          <Route path="/community/clubs/:id" element={<CommunityClubDetail />} />
          <Route path="/community/volunteer/:id" element={<CommunityVolunteerDetail />} />
          <Route path="/community/partners/:id" element={<CommunityPartnerDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
