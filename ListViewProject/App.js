// app/index.js

// Impramos las Librerias basicas para el proyecto
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

// Importando las Vistas las cuales seran las Scenas para el Router
import listViewData from './listViewData';
import detailViewData from './detailViewData';

const App = () => {
  return (

    // Definimos el Router y las escenas que este lleva
    // La Escena List_View contiene toda la informacion extraida la api
    // La Escena detail_view contiene los parametros que se envian de la list_view

    // Cada Scene tiene una Key que es por la cual al momento de cargar una nueva pantalla a esta
    // se hace referencia y por la cual podremos acceder a ella

    <Router>
      <Scene key="root">

        <Scene key="list_view"
          component={listViewData}
          title="List View Api Mocky"
          initial
        />

        <Scene
          key="detail_view"
          component={detailViewData}
          title="Detail: ListView"
        />
      </Scene>
    </Router>
  );
}

export default App;