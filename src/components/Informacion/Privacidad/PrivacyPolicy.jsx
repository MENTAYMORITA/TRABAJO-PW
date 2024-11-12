import React from "react";
import "./PrivacyPolicy.css";

const PrivacyP = () => {
  return (
    <div className="privacy-container">
      <h1>Política de Privacidad de www.impacto.com.pe</h1>
      <p>
        Esta Aplicación recoge algunos Datos Personales de sus Usuarios. El presente
        documento puede imprimirse como referencia utilizando el comando de impresión en
        las opciones de configuración de cualquier navegador.
      </p>

      <section>
        <h2>Datos Personales Recogidos</h2>
        <p>
          Los datos que esta aplicación puede recopilar incluyen: nombre, apellido(s),
          número de teléfono, correo electrónico, Cookies, datos de uso, país, sexo, fecha
          de nacimiento y ciudad. Estos datos pueden ser proporcionados directamente por
          el usuario o recopilados automáticamente al utilizar esta aplicación.
        </p>
      </section>

      <section>
        <h2>Base Jurídica del Tratamiento</h2>
        <ul>
          <li>Consentimiento para una o más finalidades específicas.</li>
          <li>Necesidad para el cumplimiento de un contrato con el usuario.</li>
          <li>Cumplimiento de una obligación legal.</li>
          <li>Interés público o interés legítimo del titular.</li>
        </ul>
      </section>

      <section>
        <h2>Periodo de Conservación</h2>
        <p>
          Los datos personales se conservarán durante el tiempo necesario para cumplir con
          la finalidad para la que fueron recogidos. Una vez terminado el periodo de
          conservación, los datos serán eliminados.
        </p>
      </section>

      <section>
        <h2>Finalidad del Tratamiento</h2>
        <ul>
          <li>Acceso a servicios de terceros (Facebook, Google).</li>
          <li>Contacto con el usuario mediante formularios o newsletter.</li>
          <li>Estadísticas y análisis del tráfico web (Google Analytics).</li>
          <li>Seguimiento de conversiones (Facebook Ads).</li>
        </ul>
      </section>

      <section>
        <h2>Derechos de los Usuarios</h2>
        <p>
          Los usuarios pueden ejercer sus derechos respecto al tratamiento de datos:
          retirar consentimiento, oponerse al tratamiento, acceder a sus datos, solicitar
          modificaciones, restringir el tratamiento, eliminar datos y solicitar
          portabilidad.
        </p>
      </section>

      <section>
        <h2>Modificación de la Política de Privacidad</h2>
        <p>
          El titular se reserva el derecho de modificar esta política en cualquier
          momento. Se recomienda revisar esta página frecuentemente para estar al tanto de
          los cambios.
        </p>
      </section>
    </div>
  );
};

export default PrivacyP;
