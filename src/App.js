import { useState } from 'react';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Cotizacion } from './components/Cotizacion';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [cotizacion, setCotizacion] = useState({
    cotizacionTotal: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [loader, setLoader] = useState(false);

  // Extraer datos de cotización
  const { cotizacionTotal, datos } = cotizacion;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarCotizacion={setCotizacion}
          cargandoCotizacion={setLoader}
        />

        {loader && <Spinner />}

        <Cotizacion datos={datos} />

        {/* Si no esta el loader entonces no se muestra el mensaje de ayuda o resultado */}
        {!loader && <Resultado cotizacionTotal={cotizacionTotal} />}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
