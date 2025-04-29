
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetails";
import JobseekerDashboard from "./pages/JobseekerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import PostJobForm from "./pages/PostJobForm";
import ChatPage from "./pages/ChatPage";
import AboutPage from "./pages/AboutPage";
import EmployersPage from "./pages/EmployersPage";
import RegisterEmployer from "./pages/RegisterEmployer";
import RegisterJobseeker from "./pages/RegisterJobseeker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/jobseeker/dashboard" element={<JobseekerDashboard />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employer/post-job" element={<PostJobForm />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/register/employer" element={<RegisterEmployer />} />
          <Route path="/register/jobseeker" element={<RegisterJobseeker />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
