import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categoria.css';
import { BASE_URL } from '../../Api/constants';

const Categoria = () => {
  const { categoria } = useParams(); // Obtenemos la categoría seleccionada desde la URL
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // Cargar todos los productos una vez
  useEffect(() => {
    fetch(`${BASE_URL}/products/category/:category`) // Llamada para obtener todos los productos
      .then((response) => response.json())
      .then((data) => {
        setProductos(data); // Guardamos todos los productos en el estado
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  // Filtrar productos por categoría cada vez que cambia `categoria`
  useEffect(() => {
    const filtrados = productos.filter((producto) =>
      producto.categoria.toLowerCase() === categoria.toLowerCase()
    );
    setProductosFiltrados(filtrados);
  }, [categoria, productos]);

  return (
    <div>
      <h2 className="TitleH2">Productos: {categoria}</h2>
      <div className="categoria">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <div key={index} className="categoriacard">
              <img src={producto.imageUrl} alt={producto.name} className="categoria-image" />
              <h3>{producto.name}</h3>
              <p><strong>Código:</strong> {producto.code}</p>
              <p><strong>Stock:</strong> {producto.stock}</p>
              <p><strong>Precio (USD):</strong> ${producto.priceUSD}</p>
              <p><strong>Precio (PEN):</strong> S/{producto.pricePEN}</p>
              <button className="añadircategoriacarrito">Añadir al Carrito</button>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
