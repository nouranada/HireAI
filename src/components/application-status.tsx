
import { cn } from '@/lib/utils';
import { Check, Clock, FileText, Calendar, X } from 'lucide-react';

type ApplicationStatus = 'applied' | 'reviewing' | 'interview' | 'declined' | 'offered';

interface ApplicationStatusProps {
  status: ApplicationStatus;
  date: string;
  className?: string;
}

const ApplicationStatus = ({ status, date, className }: ApplicationStatusProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'applied':
        return {
          icon: <FileText className="h-5 w-5" />,
          label: 'Applied',
          color: 'text-gray-600 bg-gray-100'
        };
      case 'reviewing':
        return {
          icon: <Clock className="h-5 w-5" />,
          label: 'In Review',
          color: 'text-blue-600 bg-blue-100'
        };
      case 'interview':
        return {
          icon: <Calendar className="h-5 w-5" />,
          label: 'Interview',
          color: 'text-hireai-purple bg-hireai-light-purple'
        };
      case 'declined':
        return {
          icon: <X className="h-5 w-5" />,
          label: 'Declined',
          color: 'text-red-600 bg-red-100'
        };
      case 'offered':
        return {
          icon: <Check className="h-5 w-5" />,
          label: 'Offered',
          color: 'text-hireai-success bg-green-100'
        };
      default:
        return {
          icon: <FileText className="h-5 w-5" />,
          label: 'Unknown',
          color: 'text-gray-600 bg-gray-100'
        };
    }
  };

  const { icon, label, color } = getStatusConfig();

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("flex items-center rounded-full px-3 py-1", color)}>
        <span className="mr-1">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-xs text-gray-500 ml-2">{date}</span>
    </div>
  );
};

export default ApplicationStatus;
