import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Login from './routes/LoginPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
     path: "/",
     element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
