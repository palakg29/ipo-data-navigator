
import React from 'react';
import { Button } from '@/components/ui/button';

interface IPOCardProps {
  company: {
    name: string;
    logo: string;
    priceRange: string;
    openDate: string;
    closeDate: string;
    issueSize: string;
    issueType: string;
    listingDate: string;
    status: 'upcoming' | 'ongoing' | 'listed';
  };
}

const IPOCard = ({ company }: IPOCardProps) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      {/* Company Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold text-gray-600">{company.logo}</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{company.name}</h3>
        </div>
      </div>

      {/* Price Information */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500">PRICE BAND</p>
          <p className="text-sm font-semibold text-gray-900">{company.priceRange}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">OPEN</p>
          <p className="text-sm font-semibold text-gray-900">{company.openDate}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">CLOSE</p>
          <p className="text-sm font-semibold text-gray-900">{company.closeDate}</p>
        </div>
      </div>

      {/* Issue Information */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-sm font-medium text-gray-500">ISSUE SIZE</p>
          <p className="text-sm font-semibold text-gray-900">{company.issueSize}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">ISSUE TYPE</p>
          <p className="text-sm font-semibold text-gray-900">{company.issueType}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">LISTING DATE</p>
          <p className="text-sm font-semibold text-gray-900">{company.listingDate}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          RHP
        </Button>
        <Button 
          size="sm" 
          className="flex-1 bg-red-600 hover:bg-red-700 text-white"
        >
          DRHP
        </Button>
      </div>
    </div>
  );
};

export default IPOCard;
