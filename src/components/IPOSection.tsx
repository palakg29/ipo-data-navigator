
import React from 'react';
import IPOCard from './IPOCard';

const IPOSection = () => {
  const upcomingIPOs = [
    {
      name: 'Nova Agritech Ltd.',
      logo: 'NOVA',
      priceRange: 'Rs 39 - 41',
      openDate: '2024-01-22',
      closeDate: '2024-01-24',
      issueSize: '143.81 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-30',
      status: 'upcoming' as const
    },
    {
      name: 'EPACK Durable Ltd.',
      logo: 'EPACK',
      priceRange: 'Rs 218 - 230',
      openDate: '2024-01-19',
      closeDate: '2024-01-23',
      issueSize: '640.05 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-29',
      status: 'upcoming' as const
    },
    {
      name: 'RK Swamy Ltd.',
      logo: 'RK',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'Oravel Stays Ltd.',
      logo: 'OYO',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '8430 Cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'Imagine marketing Ltd.',
      logo: 'BOAT',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '2000 cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'Kids Clinic India Ltd.',
      logo: 'KCI',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'OLA Electric Mobility Ltd.',
      logo: 'OLA',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'One Mobikwik Systems Ltd.',
      logo: 'MOB',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '1900 Cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    },
    {
      name: 'Le Travenues Technology',
      logo: 'IXIGO',
      priceRange: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '1600 Cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'upcoming' as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <a href="#" className="hover:text-gray-700">Bluestock</a>
        <span>›</span>
        <a href="#" className="hover:text-gray-700">IPO</a>
        <span>›</span>
        <span className="text-gray-900">UPCOMING IPO</span>
      </nav>

      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming IPO</h1>
        <p className="text-gray-600">Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
      </div>

      {/* IPO Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingIPOs.map((ipo, index) => (
          <IPOCard key={index} company={ipo} />
        ))}
      </div>
    </div>
  );
};

export default IPOSection;
