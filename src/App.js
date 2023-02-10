import React from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx'
import Contador from './componentes/Contador.jsx'
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
       <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freeCodeCamp' />
       </div>
       <div className='contenedor-principal'>
        <Contador numClicks={this.state.numClicks} />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={this.manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={this.reiniciarContador} />
  
       </div>
      </div>
    );
  }
}

export default App;




// como componente funcional

// import './App.css';
// import Boton from './componentes/Boton.jsx'
// import Contador from './componentes/Contador.jsx'
// import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png'
// import { useState } from 'react';


// function App() { 
  
//   const [numClicks, setNumClicks] = useState(0);

//   const manejarClick = () => {
//    setNumClicks(numClicks + 1);
//   }

//   const reiniciarContador = () => {
//     setNumClicks(0);
//   }
//   return (
//     <div className="App">
//      <div className='freecodecamp-logo-contenedor'>
//       <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freeCodeCamp' />
//      </div>
//      <div className='contenedor-principal'>
//       <Contador numClicks={numClicks} />
//       <Boton
//         texto='Click'
//         esBotonDeClick={true}
//         manejarClick={manejarClick} />
//       <Boton
//         texto='Reiniciar'
//         esBotonDeClick={false}
//         manejarClick={reiniciarContador} />

//      </div>
//     </div>
//   );
// }

// export default App;
