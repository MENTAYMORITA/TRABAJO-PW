import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Login from './routes/LoginPage.jsx'
import Registros from './components/Persona/Registro/Register.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contenido from './components/Persona/Perfil/contenido.jsx'
import Estado from './components/Estado/Estado.jsx'
import EstadoPro from './components/EstadoPro/EstadoPro'
import Categoria from './components/Categoria/Categoria.jsx'
import { CartProvider } from './components/Carrito/boton.jsx';
import DetallePago from './components/DetallePago/DetallePago.jsx';
import AboutUs from './routes/Informacion/AboutPage.jsx'
import TermsAndConditions from './routes/Informacion/TermsPage.jsx'
import PrivacyP from './routes/Informacion/PrivacyPolicyPage.jsx'
import ContactPage2 from './routes/Informacion/ContactPage.jsx'
import CampañaPage from './routes/Informacion/Campaña.jsx'
import Pedido from './components/Pedido/pedido.jsx'
import ProductDetail from './components/Producto/ProductDetail.jsx'; 
import SearchResultsPage from './components/Buscador/SearchResultsPage.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProductList from './components/principal/ProductList.jsx'
import DetalleCompra from './components/DetalleCompra/DetalleCompra.jsx'
import Carrito from './components/Carrito/Carrito'
import Editar from './components/EstadoPro/Editar'
import Registrar from './components/EstadoPro/Registrar'


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
    path: "/SobreNosotros",
    element: <AboutUs />
  },
  
  {
    path: "/Contacto",
    element: <ContactPage2 />
  },

  {
    path: "/Terminos",
    element: <TermsAndConditions />
  },

  {
    path: "/Privacidad",
    element: <PrivacyP />
  },

  {
    path: "/Campaña",
    element: <CampañaPage />
  },

  {
    path: "/Estado",
    element: <Estado />
  },
  {
    path: "/EstadoPro",
    element: <EstadoPro />
  },
  {
    path: "/ProductList",
    element: <ProductList />
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />
  },
  {
    path: "/Carrito",
    element: <Carrito/>
  },
  {
    path: "/CartProvider",
    element: <CartProvider/>
  },

  {
    path: "/categoria/:categoria",
    element: <Categoria />
  },

  {
    path: "/Editar/:id",
    element: <Editar />
  },

  {
    path: "/Registrar",
    element: <Registrar />
  },
  {
    path: "/DetallePago",
    element: <DetallePago />
  },

  {
    path: "/DetalleCompra",
    element: <DetalleCompra />
  },

  {
    path: "/search",
    element: <SearchResultsPage />
  },
  
  {
    path: "/Pedido",
    element: <Pedido />
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
