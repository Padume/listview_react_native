/*
 *  Nombre: detailViewData.js
 *
 *  Objetivo: Este archivo es una Vista que retorna un View que contiene los elementos
              de Text y una ImageBackground, estos datos provienen como paraemtro de 
              la escena anterior de la ListView.
 *
 *  Autor:  Luis Hernando Valencia
 *  Fecha de Creación: 24/04/2018
 *  Fecha de Modificación: 28/04/2018
*/

// Importamos las Librerias basicas para el proyecto
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

const detailViewData = (props) => {
  return (
    <View style={styles.container}>
    
      <ImageBackground source={{uri: props.dataRow.thumbnail}} style={styles.backgroundImage}>
      </ImageBackground>
      <View style={styles.container2}>

      <Text style={styles.tituloPrincipal}>
        {props.dataRow.name}
      </Text>

      <View style={styles.subcontainer}>

      <Text>
        <Text style={styles.tituloDato}> Age:  </Text>
        <Text style={styles.contenidoDato}> {props.dataRow.age}  </Text>
      </Text>

      <Text>
        <Text style={styles.tituloDato}> Hair Color: </Text>
        <Text style={styles.contenidoDato}> {props.dataRow.hair_color} </Text>
      </Text>

      <Text>
        <Text style={styles.tituloDato}> Weight: </Text>
        <Text style={styles.contenidoDato}> {props.dataRow.weight} </Text>
      </Text>

      <Text>
        <Text style={styles.tituloDato}> Weight: </Text>
        <Text style={styles.contenidoDato}> {props.dataRow.weight} </Text>
      </Text>

      <Text>
        <Text style={styles.tituloDato}> Height: </Text>
        <Text style={styles.contenidoDato}> {props.dataRow.height} </Text>
      </Text>

      <Text style={styles.tituloDato}> Professions: </Text>
      <Text style={styles.contenidoDato}> {props.dataRow.professions} </Text>

      </View>
      </View>
    </View>
  );
}

// Estilos de los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  subcontainer:{
    marginTop:5,
    marginLeft:25,
    flex: 1,

  },
  tituloDato: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  contenidoDato: {
    fontSize: 20,
    color: '#000'
  },
  tituloPrincipal: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2
  },
  backgroundImage:{
    justifyContent: 'center',
     alignItems: 'flex-start',
     alignSelf: 'stretch',
     height:300
  },
  container2:{
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 50,
    marginRight:50
  }
});

export default detailViewData;