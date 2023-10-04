import React from 'react'
import './App.css'
import s from './App.module.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Portfolio} from "./components/Portfolio/Portfolio"
import {CV} from "./components/CV/CV"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Portfolio />,
    },
    // {
    //   path: '/cv',
    //   element: <CV />,
    // },
  ])
  return (
    <div className={s.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
