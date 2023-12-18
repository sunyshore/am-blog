import React from 'react'
import Blog from '../pages/Blog/Blog'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import About from '../pages/About/About'
import Music from '../pages/Music/Music'
import Eurovision from '../pages/Eurovision/Eurovision'
import Contact from '../pages/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Base = (element) => {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: Base(Blog()) },
    { path: '/about', element: Base(About()) },
    { path: '/music', element: Base(Music()) },
    { path: '/eurovision', element: Base(Eurovision()) },
    { path: '/contact', element: Base(Contact()) },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
