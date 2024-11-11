import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Login from './routes/LoginPage.jsx'
import Registros from './components/Persona/Registro/Register.jsx'
import Footer from './components/Footer/Footer.jsx'
import PerfilAd from './routes/PerfilClientPage.jsx'
import PerfilAl from './routes/PerfilAdminPage.jsx'
import Contenido from './components/Persona/Perfil/contenido.jsx'
import Estado from './components/Estado/Estado.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
     path: "/",
     element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Registros />
  },
  
  {
    path: "/Contenido/:modo",
    element: <Contenido />
  },
  {
    path: "/Perfiladm",
    element: <PerfilAd />
  },
  {
    path: "/Perfilclient",
    element: <PerfilAl />
  },

  {
    path: "/Estado",
    element: <Estado />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
