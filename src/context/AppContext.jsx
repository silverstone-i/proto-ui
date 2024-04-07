import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState('');

  // Function to update the selected section
  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    console.log(`Selected section: ${section}`); // Logging the selected section
  };

  return (
    <AppContext.Provider value={{ selectedSection, handleSectionSelect }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);