
import React, { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface IPOSearchProps {
  onSearch: (filters: {
    searchTerm: string;
    status: string;
    dateRange: string;
  }) => void;
}

const IPOSearch = ({ onSearch }: IPOSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  const handleSearch = () => {
    onSearch({ searchTerm, status, dateRange });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search IPOs by company name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Status Filter */}
        <div className="min-w-[150px]">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Listed">Listed</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="min-w-[150px]">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Time</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="next-month">Next Month</option>
          </select>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200"
        >
          <Filter className="w-4 h-4 mr-2" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default IPOSearch;
