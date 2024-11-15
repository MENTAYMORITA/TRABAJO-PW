import React, { useState, useEffect } from 'react';
import './EstadoPro.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Api/constants';


const EstadoPro = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch(`${BASE_URL}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al cargar datos:', error));
  }, []);

  const handleDelete = (productId) => {
    // Filtrar productos eliminando el que tenga el id proporcionado
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  
    // Solicitud DELETE al backend
    fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto eliminado correctamente');
      } else {
        console.error('Error al eliminar el producto');
      }
    })
    .catch(error => console.error('Error en la solicitud de eliminación:', error));
  };
  

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? product.category === filter : true)
  );

  return (
    <div className="estado-pro-container">
      <div className="navigation-links">
        <Link to="/Estado">ORDEN</Link>
        <Link to="/EstadoPro">PRODUCTOS</Link>
      </div>
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Búsqueda por nombre"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">Todos las categorias</option>
          <option value="Laptops">Laptops</option>
          <option value="Laptops Gaming">Laptops Gaming</option>
          <option value="Tarjetas de Video">Tarjetas de Video</option>
          <option value="Accesorios">Accesorios</option>
        </select>
        <Link to={`/Registrar`}>
                  <button>Registrar</button>
                </Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Código de Productos</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td><img src={product.imageUrl} alt={product.name} width="50" /></td>
              <td>
                <Link to={`/Editar/${product.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstadoPro;
