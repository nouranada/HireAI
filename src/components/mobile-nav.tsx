
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, MessageSquare, User } from 'lucide-react';

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-around z-50">
      <NavItem icon={<Home size={24} />} label="Home" to="/" active={path === '/'} />
      <NavItem icon={<Briefcase size={24} />} label="Jobs" to="/jobs" active={path.includes('/jobs')} />
      <NavItem icon={<MessageSquare size={24} />} label="Chat" to="/chat" active={path.includes('/chat')} />
      <NavItem icon={<User size={24} />} label="Profile" to="/profile" active={path.includes('/profile')} />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active: boolean;
}

const NavItem = ({ icon, label, to, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center ${
        active ? 'text-hireai-blue' : 'text-gray-500'
      }`}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default MobileNav;
