import React from 'react';

const Tab = ({ label, activeTab, setActiveTab }) => {
  const isActive = activeTab === label.toLowerCase().replace(' ', '');
  return (
    <button
      className={`py-2 px-4 mx-2 rounded-full ${isActive ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white' : 'bg-gray-700 text-gray-400'}`}
      onClick={() => setActiveTab(label.toLowerCase().replace(' ', ''))}
    >
      {label}
    </button>
  );
};

export default Tab;
