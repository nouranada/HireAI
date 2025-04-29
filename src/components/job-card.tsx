
import { Link } from 'react-router-dom';
import { MapPin, Building, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import MatchScore from '@/components/match-score';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  tags: string[];
  matchScore?: number;
  timePosted: string;
  isRemote?: boolean;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  tags,
  matchScore,
  timePosted,
  isRemote = false,
}: JobCardProps) => {
  return (
    <Link to={`/jobs/${id}`}>
      <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-hireai-blue transition-all duration-200 card-shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center text-gray-500 mb-2">
              <Building className="h-4 w-4 mr-1" />
              <span className="text-sm">{company}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
              {isRemote && <Badge variant="outline" className="ml-2 bg-hireai-light-blue text-hireai-blue border-0">Remote</Badge>}
            </div>
            {salary && (
              <div className="text-sm text-gray-700 mb-2">{salary}</div>
            )}
          </div>
          {matchScore !== undefined && (
            <div className="ml-4">
              <MatchScore score={matchScore} size="sm" />
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-hireai-light-purple text-hireai-purple">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center text-gray-500 text-xs mt-2">
          <Clock className="h-3 w-3 mr-1" />
          <span>{timePosted}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
