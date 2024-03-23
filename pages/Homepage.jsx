import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-3xl font-bold underline mb-8">
          WELCOME TO ESSENCE AI
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/summary">Get Summary</Link>
        </button>
      </div>
    </>
  );
};

export default Homepage;
