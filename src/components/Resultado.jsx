import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const Resultado = ({ cotizacionTotal }) => {
  return cotizacionTotal === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      {/* Los componentes <TransitionGroup /> y <CSSTransition /> son parte de la librería 'react-transition-group' */}
      <TransitionGroup component={null} className="resultado">
        {/* Ponemos component={null} para que tenga el comportamiento de un Fragment (<></>) */}
        <CSSTransition
          classNames="resultado"
          key={cotizacionTotal}
          timeout={{ enter: 500, exit: 500 }}
        >
          {/* Es necesario pasarle una key al componente <CSSTransition />, de igual forma el timeout es la duracion de la animacion */}
          <TextoCotizacion>El total es: ${cotizacionTotal}</TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  cotizacionTotal: PropTypes.number.isRequired
};
