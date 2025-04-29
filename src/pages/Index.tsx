import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Briefcase, User, CheckCircle, SearchIcon } from 'lucide-react';
import Header from '@/components/header';
const Index = () => {
  return <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-hireai-light-blue">
        <div className="container mx-auto max-w-6xl">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                AI-Powered Hiring <span className="text-hireai-blue">Simplified</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                Connect with opportunities that match your skills or find the perfect candidates for your team with our intelligent matching algorithm.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <Link to="/jobs">
                  <Button className="w-full sm:w-auto bg-hireai-blue hover:bg-blue-700 text-white font-medium py-6 px-6 rounded-lg text-base">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Find Jobs
                  </Button>
                </Link>
                <Link to="/employers">
                  <Button variant="outline" className="w-full sm:w-auto border-hireai-purple text-hireai-purple hover:bg-hireai-light-purple font-medium py-6 px-6 rounded-lg text-base">
                    <User className="mr-2 h-5 w-5" />
                    Hire Talent
                  </Button>
                </Link>
              </div>
              
              <div className="hidden md:flex space-x-8 text-sm text-gray-500 animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hireai-success mr-2" />
                  <span>AI-Powered Matching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hireai-success mr-2" />
                  <span>Smart Job Recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hireai-success mr-2" />
                  <span>Interview AI Assistant</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 hidden md:block animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <img alt="Professional using HireAI" className="rounded-lg shadow-xl" src="/lovable-uploads/170a97b4-01d2-40b5-99a2-bc5cbe3a8d78.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How HireAI Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Seekers */}
            <div className="bg-hireai-light-blue p-6 rounded-lg">
              <div className="bg-hireai-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <SearchIcon className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Job Seekers</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>AI matches you with ideal opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Resume optimization suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Interview preparation assistance</span>
                </li>
              </ul>
              <Link to="/register/jobseeker">
                <Button variant="outline" className="w-full border-hireai-blue text-hireai-blue hover:bg-hireai-light-blue">
                  Create Seeker Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Employers */}
            <div className="bg-hireai-light-purple p-6 rounded-lg">
              <div className="bg-hireai-purple rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Employers</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Smart candidate matching technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>AI-assisted job posting creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Automated candidate screening</span>
                </li>
              </ul>
              <Link to="/register/employer">
                <Button variant="outline" className="w-full border-hireai-purple text-hireai-purple hover:bg-hireai-light-purple">
                  Register Company
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* AI Assistant */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Bot className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Assistant</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>24/7 intelligent career guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Personalized job recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-hireai-success h-5 w-5 mr-2 mt-0.5" />
                  <span>Application process assistance</span>
                </li>
              </ul>
              <Link to="/chat">
                <Button variant="default" className="w-full bg-gray-800 hover:bg-gray-700">
                  Try AI Assistant
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-hireai-blue to-hireai-purple text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Thousands</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-sm mt-2">Companies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">10k+</div>
              <div className="text-sm mt-2">Job Seekers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">87%</div>
              <div className="text-sm mt-2">Match Success</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">2x</div>
              <div className="text-sm mt-2">Faster Hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring Experience?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of companies and job seekers who are using HireAI to connect talent with opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register/jobseeker">
              <Button className="w-full sm:w-auto bg-hireai-blue hover:bg-blue-700 text-white font-medium py-6 px-8 rounded-lg text-base">
                Find Your Next Role
              </Button>
            </Link>
            <Link to="/register/employer">
              <Button variant="outline" className="w-full sm:w-auto border-hireai-purple text-hireai-purple hover:bg-hireai-light-purple font-medium py-6 px-8 rounded-lg text-base">
                Start Hiring
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/jobs" className="text-gray-600 hover:text-hireai-blue">Browse Jobs</Link></li>
                <li><Link to="/profile" className="text-gray-600 hover:text-hireai-blue">Create Profile</Link></li>
                <li><Link to="/resume" className="text-gray-600 hover:text-hireai-blue">Resume Builder</Link></li>
                <li><Link to="/career-advice" className="text-gray-600 hover:text-hireai-blue">Career Advice</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/post-job" className="text-gray-600 hover:text-hireai-blue">Post a Job</Link></li>
                <li><Link to="/talent-search" className="text-gray-600 hover:text-hireai-blue">Search Talent</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-hireai-blue">Pricing</Link></li>
                <li><Link to="/solutions" className="text-gray-600 hover:text-hireai-blue">Enterprise Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-hireai-blue">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-hireai-blue">Blog</Link></li>
                <li><Link to="/press" className="text-gray-600 hover:text-hireai-blue">Press</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-hireai-blue">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-gray-600 hover:text-hireai-blue">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-hireai-blue">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="text-gray-600 hover:text-hireai-blue">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} HireAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
function Bot(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>;
}