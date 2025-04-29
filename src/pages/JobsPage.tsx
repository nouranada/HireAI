import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, MapPin, Search, SlidersHorizontal, X } from 'lucide-react';
import JobCard, { JobCardProps } from '@/components/job-card';
import Header from '@/components/header';
import MobileNav from '@/components/mobile-nav';
import { CheckedState } from "@radix-ui/react-checkbox";

// Mock data for jobs
const MOCK_JOBS: JobCardProps[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
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
    salary: '$110,000 - $140,000',
    tags: ['Agile', 'Product Strategy', 'SaaS'],
    matchScore: 85,
    timePosted: '1 day ago',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    salary: '$130,000 - $160,000',
    tags: ['Python', 'Machine Learning', 'SQL'],
    matchScore: 78,
    timePosted: '3 days ago',
    isRemote: true,
  },
  {
    id: '4',
    title: 'UX Designer',
    company: 'Creative Solutions',
    location: 'Austin, TX',
    salary: '$90,000 - $120,000',
    tags: ['Figma', 'User Research', 'Wireframing'],
    matchScore: 88,
    timePosted: '5 days ago',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Cloud Systems Inc.',
    location: 'Seattle, WA',
    salary: '$125,000 - $155,000',
    tags: ['AWS', 'Kubernetes', 'CI/CD'],
    matchScore: 73,
    timePosted: '1 week ago',
    isRemote: true,
  },
];

// Helper function to extract salary range numbers from string
const extractSalaryRange = (salaryString: string) => {
  const numbers = salaryString.match(/\d+/g)?.map(Number) || [0, 0];
  return [numbers[0] * 1000, numbers[1] * 1000];
};

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [salary, setSalary] = useState([50000, 150000]);
  const [remoteOnly, setRemoteOnly] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesSalary = job.salary ? extractSalaryRange(job.salary)[0] >= salary[0] && 
                                      extractSalaryRange(job.salary)[1] <= salary[1] : true;
    const matchesRemote = remoteOnly ? job.isRemote : true;
    
    return matchesSearch && matchesLocation && matchesSalary && matchesRemote;
  });

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto pt-24 px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mt-6 mb-6">Find Your Perfect Job</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Job title, company, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-base"
              />
            </div>
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="City, state, or zip code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 py-6 text-base"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-500">{filteredJobs.length} jobs found</div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleFilters}
            className="flex items-center"
          >
            {showFilters ? <X className="mr-1 h-4 w-4" /> : <SlidersHorizontal className="mr-1 h-4 w-4" />}
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
        
        {showFilters && (
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 animate-fade-in">
            <h2 className="font-semibold mb-4">Filters</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Salary Range</h3>
                <div className="px-2">
                  <Slider
                    value={salary}
                    min={30000}
                    max={200000}
                    step={5000}
                    onValueChange={setSalary}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>${(salary[0]/1000).toFixed(0)}k</span>
                  <span>${(salary[1]/1000).toFixed(0)}k</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Job Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="remote-only" 
                      checked={remoteOnly} 
                      onCheckedChange={(checked: CheckedState) => setRemoteOnly(checked === true)}
                    />
                    <label htmlFor="remote-only" className="text-sm ml-2 cursor-pointer">Remote Only</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="full-time" />
                    <label htmlFor="full-time" className="text-sm ml-2 cursor-pointer">Full-Time</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="part-time" />
                    <label htmlFor="part-time" className="text-sm ml-2 cursor-pointer">Part-Time</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="contract" />
                    <label htmlFor="contract" className="text-sm ml-2 cursor-pointer">Contract</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="entry-level" />
                    <label htmlFor="entry-level" className="text-sm ml-2 cursor-pointer">Entry Level</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="mid-level" />
                    <label htmlFor="mid-level" className="text-sm ml-2 cursor-pointer">Mid Level</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="senior-level" />
                    <label htmlFor="senior-level" className="text-sm ml-2 cursor-pointer">Senior Level</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-2">
              <Button variant="outline" size="sm">Clear All</Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </div>
        )}
        
        <Tabs defaultValue="recommended" className="mb-6">
          <TabsList>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="recent">Most Recent</TabsTrigger>
            <TabsTrigger value="salary">Highest Salary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommended" className="space-y-4 mt-4">
            {filteredJobs.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </TabsContent>
          
          <TabsContent value="recent" className="space-y-4 mt-4">
            {filteredJobs.sort((a, b) => {
              const timeA = a.timePosted.includes('day') ? 
                parseInt(a.timePosted.split(' ')[0]) : 
                parseInt(a.timePosted.split(' ')[0]) * 7;
              const timeB = b.timePosted.includes('day') ? 
                parseInt(b.timePosted.split(' ')[0]) : 
                parseInt(b.timePosted.split(' ')[0]) * 7;
              return timeA - timeB;
            }).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </TabsContent>
          
          <TabsContent value="salary" className="space-y-4 mt-4">
            {filteredJobs.sort((a, b) => {
              const salaryA = a.salary ? extractSalaryRange(a.salary)[1] : 0;
              const salaryB = b.salary ? extractSalaryRange(b.salary)[1] : 0;
              return salaryB - salaryA;
            }).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default JobsPage;
