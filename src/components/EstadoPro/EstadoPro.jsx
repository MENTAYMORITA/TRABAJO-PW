import React, { useState, useEffect } from 'react';
import './EstadoPro.css';

const EstadoPro = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch('/EstadoPro/EstadoPro.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al cargar datos:', error));
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? product.category === filter : true)
  );

  return (
    <div className="estado-pro-container">
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Búsqueda por nombre"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">Todos los tipos</option>
          <option value="Laptops">Laptops</option>
          <option value="Laptops Gaming">Laptops Gaming</option>
          <option value="Tarjetas de Video">Tarjetas de Video</option>
          <option value="Accesorios">Accesorios</option>
        </select>
        <button>Registrar Producto</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Código de Productos</th>
            <th>Nombre</th>
            <th>Tipo</th>
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
              <td><button>Editar</button></td>
              <td><button>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstadoPro;
