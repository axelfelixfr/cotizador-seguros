import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers';

const ContenedorCotizacion = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

export const Cotizacion = ({ datos }) => {
  // Extraer datos
  const { marca, year, plan } = datos;

  // Si los datos de la cotización están vacios, regresara null para no mostrar el componente
  if (marca === '' || year === '' || plan === '') {
    return null;
  }

  return (
    <ContenedorCotizacion>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorCotizacion>
  );
};

Cotizacion.propTypes = {
  datos: PropTypes.object.isRequired
};
