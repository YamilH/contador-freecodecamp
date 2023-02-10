import React from 'react';
import '../stylesheets/Boton.css';

class Boton extends React.Component {
  render() {
    return (
      <button class={ this.props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={this.props.manejarClick}>
        {this.props.texto}
      </button>
    )
  }
}

export default Boton;



// como componente funcional 

// function Boton({ texto, esBotonDeClick, manejarClick }) {
//   return (
//     <button class={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
//     onClick={manejarClick}>
//       {texto}
//     </button>
//   )
// }

// export default Boton;