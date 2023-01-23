import { useState } from 'react'
import { 
  Routes, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
 RouterProvider} from 'react-router-dom'
// PAGES
import Crew from './pages/Crew/crew'
import Destination from './pages/Destination/destination'
import Home from './pages/Home/home'
import Technology from './pages/Technology/technology'
// COMPONENTS
import Navbar from './components/navbar'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
      <Route index  element={<Home />}/>
      <Route path="destination" element={<Destination />}/>
      <Route path="crew" element={<Crew />}/>
      <Route path="technology" element={<Technology />}/>
    </Route>
    )
  )
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
