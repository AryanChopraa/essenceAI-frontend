import React from 'react'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
        <div className='text-3xl font-bold underline'>WELCOME TO ESSENCE AI</div>
        <button>
            <Link to="/summary">
                 Get Summary
            </Link>
        </button>
    </>

    
  )
}

export default Homepage