import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import Login from './components/Login.jsx'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element :<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
