import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react'
import Formulario from './components/Formulario';


function App() {

  //definir el state

  const[busquedaLetra, guardarBusquedaLetra]=useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length=== 0) return;
    
    const consultarApiLetra =async () => {
      const {artista, cancion}= busquedaLetra;
      const url= `https://api.vagalume.com.br/${artista}/${cancion}`;

      const resultado= await axios (url);
      console.log(resultado);
    }
    consultarApiLetra();

  },[busquedaLetra]);
  return (
    <Fragment>
      <Formulario
      guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
