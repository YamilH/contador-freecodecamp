import './App.css';
import Boton from './componentes/Boton.jsx'
import Contador from './componentes/Contador.jsx'
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png'
import { useState } from 'react';

function App() { 
  
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
   setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freeCodeCamp' />
     </div>
     <div className='contenedor-principal'>
      <Contador numClicks={numClicks} />
      <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
      <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />

     </div>

    </div>
  );
}

export default App;
