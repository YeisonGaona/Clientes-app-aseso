import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DetalleCliente = ({cliente, volverAccion}) => {
    return (
        <div className="detalleCliente">
            <span>
                <strong>Identificacion:</strong> {cliente.identificacion}
            </span>
            <span>
                <strong>Nombre:</strong>  {cliente.nombre}
            </span>
            <span>
                <strong>Edad:</strong> {cliente.edad}
            </span>
            <span>
                <strong>Fecha de nacimiento:</strong> {cliente.fechaNacimiento}
            </span>
            <button onClick={()=>volverAccion()}>Volver</button>   
        </div>
    );
};

DetalleCliente.propTypes = {
    cliente: PropTypes.shape({
        identificacion: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        fechaNacimiento: PropTypes.string.isRequired
    }),
    volverAccion: PropTypes.func.isRequired
};

export default DetalleCliente;