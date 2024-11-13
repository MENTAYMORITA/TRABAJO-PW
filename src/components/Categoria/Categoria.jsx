import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categoria.css';

const Categoria = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch('/Producto.json')
      .then((response) => response.json())
      .then((data) => {
        const productosFiltrados = data.filter(
          (producto) => producto.category.toLowerCase() === categoria.toLowerCase()
        );
        setProductos(productosFiltrados);
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, [categoria]);

  return (
    <div>
      <h2 className='TitleH2'>Productos: {categoria}</h2>
      <div className="categoria">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="categoriacard">
              <img src={producto.imageUrl} alt={producto.name} className="categoria-image" />
              <h3>{producto.name}</h3>
              <p>{producto.pricePEN}</p>
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
