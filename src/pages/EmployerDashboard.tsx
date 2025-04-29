
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, ChevronRight, Clock, Eye, FileText, Search, Users, Briefcase, Plus } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/header';
import { Badge } from '@/components/ui/badge';
import AiChat from '@/components/ai-chat';

// Mock data
const ACTIVE_JOBS = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    applicants: 23,
    views: 145,
    daysRemaining: 14,
    isRemote: true,
  },
  {
    id: '2',
    title: 'Product Manager',
    location: 'New York, NY',
    applicants: 18,
    views: 98,
    daysRemaining: 21,
  },
  {
    id: '3',
    title: 'UX Designer',
    location: 'Austin, TX',
    applicants: 15,
    views: 87,
    daysRemaining: 10,
    isRemote: true,
  },
];

const TOP_CANDIDATES = [
  {
    id: '1',
    name: 'Emma Rodriguez',
    role: 'Senior Frontend Developer',
    matchScore: 92,
    location: 'San Francisco, CA',
    status: 'interview',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    matchScore: 89,
    location: 'Remote',
    status: 'review',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'UI Engineer',
    matchScore: 85,
    location: 'Seattle, WA',
    status: 'new',
  },
];

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed h-full pt-20">
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-hireai-blue rounded-md flex items-center justify-center text-white font-semibold">
              TC
            </div>
            <div className="ml-3">
              <h3 className="font-medium">Tech Company</h3>
              <p className="text-xs text-gray-500">Company Admin</p>
            </div>
          </div>
          
          <nav className="flex-1 px-3 pt-4">
            <Link to="/employer/dashboard" className="flex items-center px-3 py-2 mb-1 text-hireai-blue bg-hireai-light-blue rounded-md">
              <BarChart className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link to="/employer/jobs" className="flex items-center px-3 py-2 mb-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <Briefcase className="h-5 w-5 mr-3" />
              <span>Job Postings</span>
            </Link>
            <Link to="/employer/candidates" className="flex items-center px-3 py-2 mb-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="h-5 w-5 mr-3" />
              <span>Candidates</span>
            </Link>
            <Link to="/employer/search" className="flex items-center px-3 py-2 mb-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5 mr-3" />
              <span>Talent Search</span>
            </Link>
            <Link to="/employer/messages" className="flex items-center px-3 py-2 mb-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <MessageSquare className="h-5 w-5 mr-3" />
              <span>Messages</span>
            </Link>
            <Link to="/employer/settings" className="flex items-center px-3 py-2 mb-1 text-gray-600 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="md:ml-64 w-full">
          <div className="container mx-auto pt-24 px-4 max-w-6xl mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold">Employer Dashboard</h1>
                <p className="text-gray-500">Welcome back, Tech Company</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Link to="/employer/post-job">
                  <Button className="bg-hireai-blue hover:bg-blue-700">
                    <Plus className="h-5 w-5 mr-1" />
                    Post a Job
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                          <h3 className="text-2xl font-bold mt-1">5</h3>
                        </div>
                        <div className="bg-hireai-light-blue p-3 rounded-full">
                          <Briefcase className="h-6 w-6 text-hireai-blue" />
                        </div>
                      </div>
                      <p className="text-xs text-green-600 mt-4 flex items-center">
                        <span className="text-green-600">&#9650;</span> 2 new this month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Total Applicants</p>
                          <h3 className="text-2xl font-bold mt-1">78</h3>
                        </div>
                        <div className="bg-hireai-light-purple p-3 rounded-full">
                          <Users className="h-6 w-6 text-hireai-purple" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4">12 new in the last week</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Job Views</p>
                          <h3 className="text-2xl font-bold mt-1">432</h3>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Eye className="h-6 w-6 text-hireai-blue" />
                        </div>
                      </div>
                      <p className="text-xs text-hireai-blue mt-4 flex items-center">
                        <span className="text-hireai-blue">&#9650;</span> 24% from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Active Jobs */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Active Job Postings</CardTitle>
                      <Link to="/employer/jobs" className="text-sm text-hireai-blue hover:underline flex items-center">
                        View all
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ACTIVE_JOBS.map((job) => (
                        <div key={job.id} className="border-b border-gray-200 pb-4 last:border-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="mb-2 sm:mb-0">
                              <Link to={`/employer/jobs/${job.id}`} className="font-medium text-gray-900 hover:text-hireai-blue">
                                {job.title}
                              </Link>
                              <p className="text-sm text-gray-600 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {job.location}
                                {job.isRemote && (
                                  <Badge variant="outline" className="ml-2 bg-hireai-light-blue text-hireai-blue border-0 text-xs">
                                    Remote
                                  </Badge>
                                )}
                              </p>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <p className="text-sm font-medium">{job.applicants}</p>
                                <p className="text-xs text-gray-500">Applicants</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium">{job.views}</p>
                                <p className="text-xs text-gray-500">Views</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium">{job.daysRemaining} days</p>
                                <p className="text-xs text-gray-500">Remaining</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/employer/post-job">
                      <Button variant="outline" className="w-full mt-4">
                        <Plus className="h-4 w-4 mr-1" />
                        Post a New Job
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Hiring Pipeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Hiring Pipeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-2 md:mb-0">
                          <h3 className="font-medium">Application Review</h3>
                          <p className="text-sm text-gray-500">12 candidates</p>
                        </div>
                        <Progress value={25} className="h-2 w-full md:w-36" />
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-2 md:mb-0">
                          <h3 className="font-medium">Phone Screening</h3>
                          <p className="text-sm text-gray-500">8 candidates</p>
                        </div>
                        <Progress value={50} className="h-2 w-full md:w-36" />
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-2 md:mb-0">
                          <h3 className="font-medium">Technical Interview</h3>
                          <p className="text-sm text-gray-500">5 candidates</p>
                        </div>
                        <Progress value={70} className="h-2 w-full md:w-36" />
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-2 md:mb-0">
                          <h3 className="font-medium">Final Interview</h3>
                          <p className="text-sm text-gray-500">2 candidates</p>
                        </div>
                        <Progress value={90} className="h-2 w-full md:w-36" />
                      </div>
                    </div>
                    
                    <Link to="/employer/pipeline">
                      <Button variant="outline" className="w-full mt-4">
                        View Full Pipeline
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Top Candidates */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Candidates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {TOP_CANDIDATES.map((candidate) => (
                        <div key={candidate.id} className="flex items-start pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium mr-3">
                            {candidate.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{candidate.name}</h3>
                              <span className="text-sm font-medium text-hireai-blue">{candidate.matchScore}%</span>
                            </div>
                            <p className="text-sm text-gray-600">{candidate.role}</p>
                            <p className="text-xs text-gray-500">{candidate.location}</p>
                            <div className="mt-2">
                              {candidate.status === 'interview' && (
                                <Badge className="bg-hireai-light-purple text-hireai-purple">Interview</Badge>
                              )}
                              {candidate.status === 'review' && (
                                <Badge className="bg-hireai-light-blue text-hireai-blue">In Review</Badge>
                              )}
                              {candidate.status === 'new' && (
                                <Badge className="bg-gray-100 text-gray-600">New</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/employer/candidates">
                      <Button variant="outline" className="w-full mt-4">
                        View All Candidates
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* AI Assistant */}
                <Card>
                  <CardHeader>
                    <CardTitle>AI Hiring Assistant</CardTitle>
                  </CardHeader>
                  <CardContent className="h-96">
                    <AiChat />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;

function MessageSquare(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MapPin(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Settings(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
