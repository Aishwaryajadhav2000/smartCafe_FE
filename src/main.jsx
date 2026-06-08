import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import Login from './components/Login.jsx'
import Neworder from './pages/Neworder.jsx'
import Allorders from './pages/Allorders.jsx'
import AddFood from './pages/AddFood.jsx'
import Body from './pages/Body.jsx'
import Loading from './components/Loading.jsx'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element :<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'neworder',
        element:<Neworder></Neworder>
      },
      {
        path:'allorders',
        element:<Allorders></Allorders>
      },
      {
        path:'addfood',
        element:<AddFood></AddFood>
      },
      {
        path:'/',
        element:<Suspense fallback={<Loading></Loading>}>
          <Body></Body>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
