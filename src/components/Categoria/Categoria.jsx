import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categoria.css';
import { BASE_URL } from '../../Api/constants';

const Categoria = () => {
  const { categoria } = useParams(); // Obtenemos la categoría seleccionada desde la URL
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch para cargar los productos filtrados por categoría
  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${BASE_URL}/products/category/${categoria}`); // Llamada al endpoint con la categoría dinámica
        if (!response.ok) {
          throw new Error('Error al cargar los productos.');
        }
        const data = await response.json();
        setProductosFiltrados(data);
      } catch (error) {
        setError(error.message);
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoria]);

  return (
    <div>
      <h2 className="TitleH2">Productos: {categoria}</h2>
      {loading && <p>Cargando productos...</p>}
      {error && <p className="error-message">{error}</p>}
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
          !loading && <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
