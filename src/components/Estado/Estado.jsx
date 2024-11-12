import React, { useState, useEffect } from 'react';
import './Estado.css';

const Estado = () => {
  const [filter, setFilter] = useState('Pendiente');
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState([]); // Estado para almacenar las órdenes cargadas desde el JSON

  useEffect(() => {
    // Cargar el archivo JSON cuando el componente se monte
    fetch('/Estado.json')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  // Filtrar las órdenes en función del filtro y la búsqueda
  const filteredOrders = orders.filter(
    (order) =>
      (filter === 'Pendiente' || filter === 'Entregado') &&
      order.status === filter &&
      order.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="estado-container">
      <div className="filter-section">
        <label htmlFor="filter">Filtro:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
          <option value="Todos">Todos</option>
        </select>
        <input
          type="text"
          placeholder="Búsqueda por cliente"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>N° de Orden</th>
            <th>Cliente</th>
            <th>Dirección</th>
            <th>DNI</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.orderNum}>
              <td>{order.orderNum}</td>
              <td>{order.client}</td>
              <td>{order.address}</td>
              <td>{order.dni}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estado;
