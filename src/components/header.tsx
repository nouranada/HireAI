
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-hireai-blue">Hire<span className="text-hireai-purple">AI</span></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-600 hover:text-hireai-blue font-medium">Find Jobs</Link>
            <Link to="/employers" className="text-gray-600 hover:text-hireai-blue font-medium">For Employers</Link>
            <Link to="/about" className="text-gray-600 hover:text-hireai-blue font-medium">About</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/notifications">
              <Bell className="h-5 w-5 text-gray-600 hover:text-hireai-blue" />
            </Link>
            <Link to="/search">
              <Search className="h-5 w-5 text-gray-600 hover:text-hireai-blue" />
            </Link>
            <div className="border-l border-gray-200 h-6 mx-2"></div>
            <Link to="/login">
              <Button variant="outline" size="sm" className="font-medium">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm" className="font-medium bg-hireai-blue hover:bg-blue-700">Sign Up</Button>
            </Link>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-200 animate-slide-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/jobs" className="text-gray-600 hover:text-hireai-blue font-medium py-2">Find Jobs</Link>
              <Link to="/employers" className="text-gray-600 hover:text-hireai-blue font-medium py-2">For Employers</Link>
              <Link to="/about" className="text-gray-600 hover:text-hireai-blue font-medium py-2">About</Link>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex space-x-4 py-2">
                <Link to="/login" className="w-1/2">
                  <Button variant="outline" className="w-full font-medium">Log In</Button>
                </Link>
                <Link to="/signup" className="w-1/2">
                  <Button variant="default" className="w-full font-medium bg-hireai-blue hover:bg-blue-700">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
