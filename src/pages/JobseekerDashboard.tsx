
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, ChevronRight, Clock, FileText, Briefcase, PieChart } from 'lucide-react';
import JobCard, { JobCardProps } from '@/components/job-card';
import ProfileStrength from '@/components/profile-strength';
import ApplicationStatus from '@/components/application-status';
import AiChat from '@/components/ai-chat';
import Header from '@/components/header';
import MobileNav from '@/components/mobile-nav';

// Mock data
const RECOMMENDED_JOBS: JobCardProps[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    tags: ['React', 'TypeScript', 'UI/UX'],
    matchScore: 92,
    timePosted: '2 days ago',
    isRemote: true,
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Growth Startup',
    location: 'New York, NY',
    tags: ['Agile', 'Product Strategy', 'SaaS'],
    matchScore: 85,
    timePosted: '1 day ago',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    tags: ['Python', 'Machine Learning', 'SQL'],
    matchScore: 78,
    timePosted: '3 days ago',
    isRemote: true,
  },
];

const APPLICATIONS = [
  { 
    id: '1',
    jobTitle: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    status: 'interview' as const,
    date: 'July 15, 2023',
    interviewDate: 'July 20, 2023',
  },
  { 
    id: '2',
    jobTitle: 'Product Manager',
    company: 'Growth Startup',
    status: 'reviewing' as const,
    date: 'July 12, 2023',
  },
  { 
    id: '3',
    jobTitle: 'UX Designer',
    company: 'Creative Solutions',
    status: 'applied' as const,
    date: 'July 10, 2023',
  },
  { 
    id: '4',
    jobTitle: 'Full Stack Developer',
    company: 'WebTech Inc.',
    status: 'declined' as const,
    date: 'July 5, 2023',
  },
];

const UPCOMING_EVENTS = [
  {
    id: '1',
    title: 'Interview with Tech Innovations Inc.',
    date: 'July 20, 2023',
    time: '10:00 AM',
    type: 'interview',
  },
  {
    id: '2',
    title: 'Resume Review Session',
    date: 'July 22, 2023',
    time: '2:00 PM',
    type: 'coaching',
  },
  {
    id: '3',
    title: 'Follow-up with Growth Startup',
    date: 'July 25, 2023',
    time: '11:30 AM',
    type: 'followup',
  },
];

const JobseekerDashboard = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto pt-24 px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Alex</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Link to="/jobs/search">
              <Button className="bg-hireai-blue hover:bg-blue-700">
                Find Jobs
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Job Views</p>
                      <h3 className="text-2xl font-bold mt-1">47</h3>
                    </div>
                    <div className="bg-hireai-light-blue p-3 rounded-full">
                      <FileText className="h-6 w-6 text-hireai-blue" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-4 flex items-center">
                    <span className="text-green-600">&#9650;</span> 12% from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Applications</p>
                      <h3 className="text-2xl font-bold mt-1">8</h3>
                    </div>
                    <div className="bg-hireai-light-purple p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-hireai-purple" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">4 in review, 3 viewed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Interviews</p>
                      <h3 className="text-2xl font-bold mt-1">2</h3>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-hireai-success" />
                    </div>
                  </div>
                  <p className="text-xs text-hireai-success mt-4 flex items-center">
                    Next: July 20, 10:00 AM
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Job Recommendations */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Recommended Jobs</CardTitle>
                  <Link to="/jobs" className="text-sm text-hireai-blue hover:underline flex items-center">
                    View all
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {RECOMMENDED_JOBS.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </CardContent>
            </Card>
            
            {/* Applications */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>My Applications</CardTitle>
                  <Link to="/applications" className="text-sm text-hireai-blue hover:underline flex items-center">
                    View all
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {APPLICATIONS.map((application) => (
                    <div key={application.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="font-medium text-gray-900">{application.jobTitle}</h3>
                          <p className="text-sm text-gray-600">{application.company}</p>
                        </div>
                        <ApplicationStatus status={application.status} date={application.date} />
                      </div>
                      
                      {application.status === 'interview' && application.interviewDate && (
                        <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm flex items-center">
                          <Calendar className="h-4 w-4 text-hireai-blue mr-2" />
                          <span>Interview scheduled for {application.interviewDate}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Profile Strength */}
            <ProfileStrength 
              score={65} 
              suggestions={[
                "Add your work experience",
                "Upload your latest portfolio",
                "Complete skill assessments"
              ]} 
            />
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {UPCOMING_EVENTS.map((event) => (
                    <div key={event.id} className="flex items-start space-x-3">
                      <div className="bg-hireai-light-blue p-2 rounded-full mt-1">
                        {event.type === 'interview' ? (
                          <Calendar className="h-4 w-4 text-hireai-blue" />
                        ) : event.type === 'coaching' ? (
                          <PieChart className="h-4 w-4 text-hireai-purple" />
                        ) : (
                          <Bell className="h-4 w-4 text-hireai-warning" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{event.title}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                </Button>
              </CardContent>
            </Card>
            
            {/* AI Assistant */}
            <Card>
              <CardHeader>
                <CardTitle>AI Career Assistant</CardTitle>
              </CardHeader>
              <CardContent className="h-96">
                <AiChat />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default JobseekerDashboard;
