/*
 *  Nombre: listViewData.js
 *
 *  Objetivo: Este archivo es una Vista que retorna un ListView
              dicha Vista hace parte de un Router que contiene las escenas
              convirtiendo este elemento en una scena con identificador "list_view"
 *
 *  Autor:  Luis Hernando Valencia
 *  Fecha de Creación: 22/04/2018
 *  Fecha de Modificación: 28/04/2018
*/

// Importamos las Librerias basicas para el proyecto
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// URL de la Api a la que vamos a obtener la informacion
const REQUEST_URL = "http://www.mocky.io/v2/5aa722ea2f0000e8048ea463%E2%80%8B";

// Clase que Contiene la informacion de la Lista
type Props = {};
export class listViewData extends Component<Props> {

  constructor(props){
    super(props)

    var data_source = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })

    this.state = {
      // Guardamos el Resultado de la Api
      dataSource: data_source.cloneWithRows([]),
      loaded: false
    }
  }

  // Props Cambiar informacion de Componente Padre a Componente Hijo.

  // Component DidMount:  espera a que los componentes del dom se hayan  iniciado
  // Una vez ocurra ejecuta la consulta a la Api
  componentDidMount(){

    var arreglo_json = [];

    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      var datos = responseJson;

      for (var i = 0; i < datos.length; i++) {
         arreglo_json.push(datos[i])
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(arreglo_json),
        loaded: true
      })
    })
  }

  renderLoadingView(){
    return(
      <View style={styles.container}>
        <Text style={styles.cargando}>Cargando Datos ... </Text>
      </View>
    )
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (  
      <View style={styles.container}>
        <ListView
          enableEmptySections = {true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  // Al Componente TouchableHighlight al momento de Presionarlo le añadimos  Actions.detail_view
  // Esto hace referencia a la escena a donde va ir y los parametros que envia
  renderRow(dataRow){
    return(
      <TouchableHighlight onPress={() => Actions.detail_view({dataRow : dataRow})} >
          <View style={styles.cell}>

            <ImageBackground source={{uri: dataRow.thumbnail}} style={styles.backgroundImage}/>
            
            <View style={styles.rightContainer}>
              <Text style={styles.title}> {dataRow.name} </Text>
              <Text style={styles.available}> Age: {dataRow.age} </Text>
            </View>
            
          </View>
      </TouchableHighlight>
    )
  }
}


// Estilos de los componentes
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    width:412,
  },
  cell:{
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 20,
    flex: 1
  },
  texto:{
    color:'#FFF',
    flex: 1
  },
  cargando:{
    color:'#fff',
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 27
  },
  backgroundImage:{
    justifyContent: 'center',
     alignItems: 'flex-start',
     alignSelf: 'stretch',
     height:300,
  },
  rightContainer: {
    backgroundColor:'rgba(52,52,52,0.5)',
    alignSelf: 'stretch'

  },
  title: {
    fontSize: 27,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  available: {
    fontSize:18,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor:'rgba(52,52,52,0)',
  },

});

// Exportamos la clase que sera usada
export default listViewData;