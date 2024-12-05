import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Obtener el término de búsqueda de la URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      setLoading(true); // Mostrar el indicador de carga
      axios
        .get(`http://localhost:3001/products?search=${searchQuery}`) // Ajusta la URL de la API según lo que necesites
        .then((response) => {
          setProducts(response.data); // Guardamos los productos filtrados
          setLoading(false); // Ocultamos el indicador de carga
        })
        .catch((error) => {
          console.error('Error al obtener los productos:', error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Resultados de búsqueda para: "{searchQuery}"</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price} $</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
