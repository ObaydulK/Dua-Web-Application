import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './App-pages/Home/Home.jsx'
import Deshboard from './App-pages/Dashboard/Deshboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/deshboard',
        element:<Deshboard/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <div className='  bg-slate-300  ' >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
