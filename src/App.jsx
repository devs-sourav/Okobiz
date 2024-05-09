import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import Consultancy from './pages/Consultancy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='consultancy' element={<Consultancy/>}/>
        </Route>
    </Route>

  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
