
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, Clock, Share2, Bookmark, BookmarkCheck, ExternalLink } from 'lucide-react';
import MatchScore from '@/components/match-score';
import Header from '@/components/header';
import MobileNav from '@/components/mobile-nav';
import { toast } from 'sonner';

// Mock job data (in a real app, this would come from an API)
const JOB_DATA = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  companyDescription: 'Tech Innovations Inc. is a leading technology company specializing in creating cutting-edge software solutions for enterprise clients. With a focus on innovation and quality, we help businesses transform their digital presence.',
  location: 'San Francisco, CA',
  isRemote: true,
  salary: '$120,000 - $150,000',
  employmentType: 'Full-time',
  experienceLevel: 'Senior (5+ years)',
  tags: ['React', 'TypeScript', 'JavaScript', 'UI/UX', 'Redux', 'CSS', 'HTML'],
  matchScore: 92,
  timePosted: '2 days ago',
  applicationDeadline: 'August 30, 2023',
  description: `
    <p>We're seeking an experienced Frontend Developer to join our product team. The ideal candidate is passionate about creating intuitive, responsive web applications with modern JavaScript frameworks.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop new user-facing features using React.js</li>
      <li>Build reusable components and front-end libraries for future use</li>
      <li>Translate designs and wireframes into high-quality code</li>
      <li>Optimize components for maximum performance across a vast array of web-capable devices and browsers</li>
      <li>Collaborate with back-end developers and designers</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>5+ years of experience with front-end development</li>
      <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
      <li>Thorough understanding of React.js and its core principles</li>
      <li>Experience with TypeScript, Redux, and modern front-end build pipelines</li>
      <li>Good understanding of asynchronous request handling, partial page updates, and AJAX</li>
      <li>Familiarity with modern front-end build pipelines and tools</li>
      <li>Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
      <li>Ability to understand business requirements and translate them into technical requirements</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive salary and equity package</li>
      <li>Health, dental, and vision insurance</li>
      <li>401(k) with company match</li>
      <li>Unlimited PTO policy</li>
      <li>Remote work options</li>
      <li>Continuous learning and development opportunities</li>
      <li>Modern equipment and software</li>
    </ul>
    
    <p>Tech Innovations Inc. is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
  `,
  aboutCompany: `
    <p>Tech Innovations Inc. is at the forefront of technology innovation, creating software solutions that help businesses thrive in the digital age.</p>
    
    <p>Founded in 2010, we've grown to a team of over 200 talented individuals across offices in San Francisco, New York, and London.</p>
    
    <p>Our culture is built on collaboration, innovation, and continuous learning. We believe in empowering our employees to take ownership of their work and contribute meaningfully to our products.</p>
    
    <h3>Company Values:</h3>
    <ul>
      <li>Innovation: We embrace new ideas and technologies</li>
      <li>Quality: We take pride in our work and deliver excellence</li>
      <li>Collaboration: We achieve more by working together</li>
      <li>Growth: We continuously learn and develop</li>
      <li>Inclusion: We value diverse perspectives and experiences</li>
    </ul>
  `,
};

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [bookmarked, setBookmarked] = useState(false);
  const job = JOB_DATA; // In a real app, you'd fetch the job data based on the ID

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? 'Job removed from bookmarks' : 'Job saved to bookmarks');
  };

  const applyForJob = () => {
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto pt-24 px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Details Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
                  <div className="flex items-center mb-2">
                    <Building className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-700">{job.company}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-700">{job.location}</span>
                    {job.isRemote && (
                      <Badge variant="outline" className="ml-2 bg-hireai-light-blue text-hireai-blue border-0">
                        Remote
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-50">
                      {job.employmentType}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      {job.experienceLevel}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      {job.salary}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <MatchScore score={job.matchScore} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-hireai-light-purple text-hireai-purple">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button className="flex-1 bg-hireai-blue hover:bg-blue-700" onClick={applyForJob}>
                  Apply Now
                </Button>
                <Button variant="outline" className="flex items-center justify-center" onClick={toggleBookmark}>
                  {bookmarked ? <BookmarkCheck className="mr-2 h-4 w-4" /> : <Bookmark className="mr-2 h-4 w-4" />}
                  {bookmarked ? 'Saved' : 'Save Job'}
                </Button>
                <Button variant="outline" className="sm:flex-none">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Posted {job.timePosted}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Apply by {job.applicationDeadline}</span>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Job Description</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }}></div>
                
                <div className="mt-8">
                  <Button className="w-full md:w-auto bg-hireai-blue hover:bg-blue-700" onClick={applyForJob}>
                    Apply for this Position
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="company" className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">About {job.company}</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.aboutCompany }}></div>
                
                <a href="#" className="text-hireai-blue hover:underline flex items-center mt-4">
                  Visit Company Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Similar Jobs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Similar Jobs</h2>
              
              <div className="space-y-4">
                <SimilarJobCard
                  title="Frontend Developer"
                  company="WebTech Solutions"
                  location="Remote"
                  matchScore={88}
                />
                
                <SimilarJobCard
                  title="React Developer"
                  company="Digital Innovations"
                  location="New York, NY"
                  matchScore={84}
                />
                
                <SimilarJobCard
                  title="UI Engineer"
                  company="CreativeUI"
                  location="Austin, TX"
                  matchScore={78}
                />
              </div>
              
              <Button variant="outline" className="w-full mt-4">View All Similar Jobs</Button>
            </div>
            
            {/* Job Insights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Job Insights</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Skills Match</h3>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-hireai-success h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm">85%</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Experience Match</h3>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-hireai-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm">90%</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Education Match</h3>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-hireai-purple h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-sm">70%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium mb-2">AI Suggestions</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-hireai-blue mr-2">•</span>
                    <span>Emphasize your TypeScript experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hireai-blue mr-2">•</span>
                    <span>Include examples of responsive UI work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hireai-blue mr-2">•</span>
                    <span>Highlight team collaboration skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

interface SimilarJobCardProps {
  title: string;
  company: string;
  location: string;
  matchScore: number;
}

const SimilarJobCard = ({ title, company, location, matchScore }: SimilarJobCardProps) => {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-0">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <div>
          <MatchScore score={matchScore} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
