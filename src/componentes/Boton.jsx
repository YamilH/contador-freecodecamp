import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button class={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={manejarClick}>
      {texto}
    </button>
  )
}

export default Boton;