import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MobileNav from '@/components/mobile-nav';
import { ArrowRight, Briefcase, Clock, LineChart, Sparkles, Users } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
const EmployersPage = () => {
  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="pt-24 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Find Top Talent Faster with HireAI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200">
              Our AI-powered platform connects you with qualified candidates that match your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/employer/post-job">
                <Button size="lg" className="bg-hireai-blue hover:bg-blue-700 text-white font-medium">
                  Post a Job
                </Button>
              </Link>
              <Link to="/employer/dashboard">
                <Button size="lg" variant="outline" className="border-white bg-white/10 hover:bg-white/20 font-medium text-gray-900 dark:text-white">
                  Employer Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HireAI?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-hireai-light-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-hireai-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600">
                  Our advanced algorithms match your job requirements with the perfect candidates, saving you time and resources.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-hireai-light-purple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-hireai-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Hiring Process</h3>
                <p className="text-gray-600">
                  Reduce time-to-hire by up to 50% with streamlined workflows and automated candidate screening.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Candidates</h3>
                <p className="text-gray-600">
                  Access a pool of pre-vetted, high-quality candidates that match your company culture and job requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 bg-indigo-100">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our streamlined process helps you find and hire qualified candidates quickly and efficiently.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="bg-hireai-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Set up your employer profile with company details, hiring preferences, and team information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="bg-hireai-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Post Your Jobs</h3>
              <p className="text-gray-600">
                Create detailed job postings with our AI assistant helping you optimize for better candidate matches.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="bg-hireai-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Review & Hire</h3>
              <p className="text-gray-600">
                Get matched with qualified candidates, review their profiles, and seamlessly manage the hiring process.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/employer/dashboard">
              <Button className="bg-hireai-blue hover:bg-blue-700">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Plans for Businesses of All Sizes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the plan that works best for your hiring needs and company size.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-6">$99<span className="text-lg text-gray-500 font-normal">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Up to 3 job postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Basic AI matching</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-hireai-blue hover:bg-blue-700">
                  Select Plan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-hireai-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <div className="text-3xl font-bold mb-6">$249<span className="text-lg text-gray-500 font-normal">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Up to 10 job postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Advanced AI matching</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Candidate tracking system</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-hireai-purple hover:bg-purple-700">
                  Select Plan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-6">Custom</div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited job postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Custom AI solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Full API access</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-hireai-blue text-hireai-blue hover:bg-blue-50">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-hireai-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Hiring Process?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of employers who are finding better candidates faster with HireAI.
          </p>
          <Link to="/employer/signup">
            <Button size="lg" className="bg-white text-hireai-blue hover:bg-gray-100 font-medium">
              Get Started For Free
            </Button>
          </Link>
        </div>
      </div>
      
      <MobileNav />
    </div>;
};
export default EmployersPage;