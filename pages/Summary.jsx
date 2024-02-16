import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

const Summary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const url = `http://localhost:3001/summary?videoUrl=${encodeURIComponent(searchTerm)}`;
      setLoading(true);
      const response = await fetch(url);
      if (response.ok){
        console.log(response);
        setLoading(false);
        setSearchTerm('');
        setTimeout(() => {
          window.location.href = "/chatbot";
        },1000)
      }
      else{
        alert("Couldn't fetch results! Please try again !");
      }
    } catch (error) {
      console.log(error);
      alert(
        'An error occurred while fetching the summary. Please try again later.'
      )
    }
    setLoading(false);
    setSearchTerm('');
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? <p className='text-3xl text-black underline'>Loading...</p> : searchResults.map((result) => (
        <div key={result.text}>
          <p>{result.text}</p>
          <p>{result.duration}</p>
          <p>{result.offset}</p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
