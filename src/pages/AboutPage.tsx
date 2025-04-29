
import React from 'react';
import Header from '@/components/header';
import MobileNav from '@/components/mobile-nav';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-hireai-blue">About HireAI</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-hireai-blue">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At HireAI, we're revolutionizing the job search and hiring process through innovative AI-powered solutions. 
              Our mission is to connect talented job seekers with their ideal employers, making the recruitment process 
              more efficient, transparent, and successful for everyone involved.
            </p>
            
            <h2 className="text-xl font-semibold mb-4 text-hireai-blue">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2025, HireAI combines cutting-edge artificial intelligence with deep industry expertise in recruitment 
              and human resources. Our team of AI specialists, recruitment professionals, and user experience designers 
              work together to create a platform that understands the needs of both job seekers and employers.
            </p>
            
            <h2 className="text-xl font-semibold mb-4 text-hireai-blue">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-hireai-purple">For Job Seekers</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>AI-powered job matching that finds opportunities aligned with your skills and career goals</li>
                  <li>Resume optimization tools to help you stand out to potential employers</li>
                  <li>Interview preparation resources and personalized coaching</li>
                  <li>Career development insights tailored to your professional journey</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-hireai-purple">For Employers</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Smart candidate matching to find the perfect fit for your open positions</li>
                  <li>Streamlined recruitment processes that save time and resources</li>
                  <li>Data-driven insights to optimize your hiring strategy</li>
                  <li>Tools to build and maintain a diverse, talented workforce</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-hireai-blue">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-hireai-purple mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible in recruitment technology.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-hireai-purple mb-2">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe in creating opportunities for everyone, regardless of background.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-hireai-purple mb-2">Transparency</h3>
                <p className="text-gray-700">
                  We promote clear, honest communication throughout the hiring process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-hireai-purple mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest quality in every aspect of our service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default AboutPage;
