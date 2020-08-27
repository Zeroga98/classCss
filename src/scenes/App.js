import React, { useEffect } from 'react';
import Header from './../components/Header/Header'
export const App = () => {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <h1>Solicitudes</h1>
        <div className="resume">
          <h3>Resumen del mes</h3>
          <div className="resume__content-card">
            <div className="card-resume">1</div>
            <div className="card-resume">2</div>
            <div className="card-resume">3</div>
            <div className="card-resume">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
