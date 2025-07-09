
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Filter } from 'lucide-react';

interface IPOSearchProps {
  onSearch: (searchTerm: string) => void;
  onFilterByStatus: (status: string) => void;
  onFilterByDate: (dateRange: { start: string; end: string }) => void;
  currentStatus: string;
}

const IPOSearch = ({ onSearch, onFilterByStatus, onFilterByDate, currentStatus }: IPOSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleDateFilter = () => {
    if (startDate && endDate) {
      onFilterByDate({ start: startDate, end: endDate });
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    onSearch('');
    onFilterByStatus('');
    onFilterByDate({ start: '', end: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search IPOs by company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
          >
            Search
          </Button>
        </form>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="transition-all duration-300 hover:scale-105"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={currentStatus}
              onChange={(e) => onFilterByStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Status</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Listed">Listed</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
            <div className="flex gap-2">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Button
                onClick={handleDateFilter}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="md:col-span-3 flex justify-end">
            <Button
              variant="outline"
              onClick={clearFilters}
              className="transition-all duration-300 hover:scale-105"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPOSearch;
