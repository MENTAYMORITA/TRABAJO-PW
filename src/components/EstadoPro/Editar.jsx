import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Editar.css';

const Editar = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar solo el producto específico por ID desde la URL directa
    fetch(`/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error al cargar datos del producto:', error));
  }, [id]);

  const handleSave = () => {
    // Guardar los cambios del producto
    fetch(`/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto actualizado correctamente');
        navigate('/EstadoPro');
      } else {
        console.error('Error al actualizar el producto');
      }
    })
    .catch(error => console.error('Error en la solicitud de actualización:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="editar-producto-container">
      <h2>EDITAR PRODUCTO</h2>
      <div className="editar-producto">
        <div className="producto-imagen">
          <img src={product.imageUrl} alt={product.name} />
          <label>Actualizar Imagen (URL):</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl || ''}
            onChange={handleChange}
          />
        </div>
        <div className="producto-info">
          <label>Código:</label>
          <input
            type="text"
            name="code"
            value={product.code || ''}
            onChange={handleChange}
          />
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name || ''}
            onChange={handleChange}
          />
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={product.description || ''}
            onChange={handleChange}
          />
          <label>Precio (USD):</label>
          <input
            type="text"
            name="priceUSD"
            value={product.priceUSD || ''}
            onChange={handleChange}
          />
          <label>Precio (PEN):</label>
          <input
            type="text"
            name="pricePEN"
            value={product.pricePEN || ''}
            onChange={handleChange}
          />
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={product.stock || ''}
            onChange={handleChange}
          />
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            value={product.category || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleSave}>GUARDAR</button>
    </div>
  );
};

export default Editar;
