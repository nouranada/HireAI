import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { Suspense, lazy } from "react";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const JobseekerDashboard = lazy(() => import("./pages/JobseekerDashboard"));
const EmployerDashboard = lazy(() => import("./pages/EmployerDashboard"));
const PostJobForm = lazy(() => import("./pages/PostJobForm"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const EmployersPage = lazy(() => import("./pages/EmployersPage"));
const RegisterEmployer = lazy(() => import("./pages/RegisterEmployer"));
const RegisterJobseeker = lazy(() => import("./pages/RegisterJobseeker"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Protected Route Component
const ProtectedRoute = ({ children, role }: { children: React.ReactNode; role?: 'employer' | 'jobseeker' }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route
          path="/jobseeker/dashboard"
          element={
            <ProtectedRoute role="jobseeker">
              <JobseekerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/dashboard"
          element={
            <ProtectedRoute role="employer">
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/post-job"
          element={
            <ProtectedRoute role="employer">
              <PostJobForm />
            </ProtectedRoute>
          }
        />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/register/employer" element={<RegisterEmployer />} />
        <Route path="/register/jobseeker" element={<RegisterJobseeker />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
