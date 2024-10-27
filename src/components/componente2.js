import React from 'react';
import logoUsuario from '../components/logoUsuario.jpg';

function TarjetaPresentacion() {
    return (
        <div className='tarjeta componenteGenerico'>
            <img src={logoUsuario} alt='ImagenUsuario'/>
            <h2>Maximo Chazarreta</h2>
            <p>Tecnico en Informática</p>
        </div>
    );
}

export default TarjetaPresentacion;