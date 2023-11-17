// // src/App.js
// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import LogList from './components/LogList';
// import './App.css'; // Import the CSS file for styling
// import image from "./img/react js images.jpeg"; 


// const App = () => {
//   const [logs, setLogs] = useState([]); // Replace with actual logs from your backend

//   const handleSearch = async (searchTerm) => {
//     try {
//       // Make a request to your backend API to fetch logs based on the search term
//       const response = await fetch(`http://your-backend-api/logs?search=${searchTerm}`);
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch logs');
//       }

//       const logsData = await response.json();
//       setLogs(logsData); // Update the 'logs' state with the fetched logs
//     } catch (error) {
//       console.error('Error fetching logs:', error.message);
//       // Handle errors or display a message to the user
//     }
//   };

//   return (
//     <div className="app-container">
//         <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat" }}></div>
//       <h1 className="title">Log Query Interface</h1>
//       <SearchBar onSearch={handleSearch} />
//       <LogList logs={logs} />
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import LogList from './components/LogList';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [logs, setLogs] = useState([]); // Replace with actual logs from your backend

  const handleSearch = async (searchTerm) => {
    try {
      // Make a request to your backend API to fetch logs based on the search term
      const response = await fetch(`http://your-backend-api/logs?search=${searchTerm}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch logs');
      }

      const logsData = await response.json();
      setLogs(logsData); // Update the 'logs' state with the fetched logs
    } catch (error) {
      console.error('Error fetching logs:', error.message);
      // Handle errors or display a message to the user
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Log Query Interface</h1>
      <SearchBar onSearch={handleSearch} />
      <LogList logs={logs} />
    </div>
  );
};

export default App;

