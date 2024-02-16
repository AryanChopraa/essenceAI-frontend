import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from '../pages/Homepage';
import Chatbotbot from '../pages/Chatbotbot';
import Summary from '../pages/Summary';
import Errorpage from '../pages/Errorpage';

function Home() {
  return (
    <>
      <Homepage/>
      
   

    </>
    
  )
}







function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Errorpage/>,
    },
    {
      path: "summary",
      element: <Summary/>,
      errorElement: <Errorpage/>,
    },
    {
      path: "chatbot",
      element: <Chatbotbot/>,
      errorElement: <Errorpage/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
