// frontend/src/App.js
import React from 'react';
import CustomerList from './Components/CustomerList';
import SearchBar from './Components/SearchBar';

function App() {
  const handleSearch = (searchTerm) => {
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <SearchBar onSearch={handleSearch} />
      <CustomerList />
    </div>
  );
}

export default App;
