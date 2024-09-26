import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from "react-hot-toast";
function App() {


  return (
    <>

<RouterProvider router={router} />
    
      <Toaster />

    </>
  )
}

export default App
