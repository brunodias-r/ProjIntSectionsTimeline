import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TimelineUC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeline}>
          <View style={styles.parte1}>
            <View style={styles.circulo} />
            <View style={styles.linha}></View>
          </View>
          <View style={styles.parte2}>
            <Text style={styles.titulo}>Unidade Curricular: {this.props.data.unidadeCurricular.nome}</Text>
            <Text style={styles.descricao}>Descrição: {this.props.data.descricao}</Text>
            <Text style={styles.data}>Código: {this.props.data.unidadeCurricular.codigo}</Text>
            <Text style={styles.data}>Carga horária: {this.props.data.unidadeCurricular.horas}</Text>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  timeline: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  tituloTimeline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    justifyContent: 'center'
  },
  parte1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 5,
  },
  circulo: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#00315a',
  },
  linha: {
    backgroundColor: '#00315a',
    height: '100%',
    width: 2,
    justifyContent: 'center',
    
  },
  parte2: {
    flex: 7,
    padding: 5,
    paddingTop: 0,
    backgroundColor: '#C5C5C5',
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  descricao: {
    fontSize: 15,
    color: '#000'
  },
  data: {
    fontSize: 15,
    color: '#656565',
  },
});

