import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import Chatpage from './pages/chatpage/Chatpage.jsx'
import Signin from './pages/signInPage/signInPage.jsx'
import Signup from './pages/signUpPage/signUpPage.jsx'
import RootLayout from './layouts/rootLayout/rootLayout.jsx'
import DashboardLayout from './layouts/dashboard/dashboard.jsx'


const router = createBrowserRouter([
{  
  element : <RootLayout/> ,
  children : [
    {
      path: "/",
      element : 
        <Homepage/>
      ,
    },
    {
      element : <DashboardLayout/>,
      children : [
        {
          path : "/dashboard",
          element : <Dashboard/>
        },
        {
          path : "/dashboard/chats/:id",
          element : <Chatpage/>
        },
      ] ,

    },
  ],
},

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
