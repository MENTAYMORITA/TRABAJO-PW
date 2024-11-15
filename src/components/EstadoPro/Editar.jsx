import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Editar.css';
import { BASE_URL } from '../../Api/constants';

const Editar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [mostrarNuevaCategoria, setMostrarNuevaCategoria] = useState(false);
  const tipoCambio = 3.81; // Tipo de cambio fijo

  useEffect(() => {
    // Cargar el producto por ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error('Error al cargar datos del producto');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Cargar las categorías disponibles
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`${BASE_URL}/productcategory`);
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        } else {
          console.error('Error al cargar categorías');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProduct();
    fetchCategorias();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    // Conversión automática entre dólares y soles
    if (name === 'pricePEN') {
      setProduct((prevProduct) => ({
        ...prevProduct,
        priceUSD: value ? (parseFloat(value) / tipoCambio).toFixed(2) : '',
      }));
    } else if (name === 'priceUSD') {
      setProduct((prevProduct) => ({
        ...prevProduct,
        pricePEN: value ? (parseFloat(value) * tipoCambio).toFixed(2) : '',
      }));
    }

    // Mostrar input para nueva categoría si selecciona esa opción
    if (name === 'category' && value === 'crear-nueva') {
      setMostrarNuevaCategoria(true);
    } else {
      setMostrarNuevaCategoria(false);
    }
  };

  const handleNuevaCategoria = async () => {
    if (!nuevaCategoria.trim()) {
      alert('El nombre de la categoría no puede estar vacío');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/productcategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nuevaCategoria }),
      });

      if (response.ok) {
        const nuevaCat = await response.json();
        setCategorias([...categorias, nuevaCat]);
        setProduct((prevProduct) => ({
          ...prevProduct,
          category: nuevaCat.id,
        }));
        setNuevaCategoria('');
        setMostrarNuevaCategoria(false);
        alert('Categoría agregada con éxito');
      } else {
        alert('Error al agregar la categoría');
      }
    } catch (error) {
      console.error('Error al agregar categoría:', error);
    }
  };

  const handleSave = async () => {
    try {
      const productToUpdate = {
        name: product.name.trim(),
        code: product.code.trim(),
        description: product.description.trim(),
        priceUSD: parseFloat(product.priceUSD),
        pricePEN: parseFloat(product.pricePEN),
        stock: parseInt(product.stock, 10),
        category_id: product.category,
        imageUrl: product.imageUrl.trim(),
      };

      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productToUpdate),
      });

      if (response.ok) {
        alert('Producto actualizado correctamente');
        navigate('/EstadoPro');
      } else {
        alert('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error en la solicitud de actualización:', error);
    }
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="editar-producto-container">
      <h2>EDITAR PRODUCTO</h2>
      <div className="editar-producto">
        <div className="editar-producto-imagen">
          <img src={product.imageUrl} alt={product.name} />
          <label>Actualizar Imagen (URL):</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl || ''}
            onChange={handleChange}
          />
        </div>
        <div className="editar-producto-info">
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
            type="number"
            name="priceUSD"
            value={product.priceUSD || ''}
            onChange={handleChange}
          />
          <label>Precio (PEN):</label>
          <input
            type="number"
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
          <select
            name="category"
            value={product.category || ''}
            onChange={handleChange}
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.name}
              </option>
            ))}
            <option value="crear-nueva">Crear nueva categoría</option>
          </select>
          {mostrarNuevaCategoria && (
            <div className="nueva-categoria">
              <input
                type="text"
                value={nuevaCategoria}
                onChange={(e) => setNuevaCategoria(e.target.value)}
                placeholder="Nueva categoría"
              />
              <button onClick={handleNuevaCategoria}>Agregar</button>
            </div>
          )}
        </div>
      </div>
      <button className="editar-button" onClick={handleSave}>
        GUARDAR
      </button>
    </div>
  );
};

export default Editar;
