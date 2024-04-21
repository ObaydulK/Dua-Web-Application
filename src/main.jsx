import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './App-pages/Home/Home.jsx'
import Deshboard from './App-pages/Dashboard/Deshboard.jsx'
import Lightbulb from './App-pages/Lightbulb/Lightbulb.jsx'
import Bookmark from './App-pages/Bookmark/Bookmark.jsx'
import MessagesSquar from './App-pages/MessagesSquar/MessagesSquar.jsx'
import BookOutline from './App-pages/BookOutline/BookOutline.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/deshboard',
        element: <Deshboard />
      },
      {
        path: '/lightbulb',
        element: <Lightbulb />
      },
      {
        path: '/bookmark',
        element: <Bookmark />
      },
      {
        path:'/messagessquar',
        element:<MessagesSquar/>
      },
      {
        path:'/bookoutline',
        element: <BookOutline/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <div className='  bg-[#F7F8FA]  ' >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
