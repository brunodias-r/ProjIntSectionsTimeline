import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function TimelineAcompanhamento({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.timeline}>
        <View style={styles.parte1}>
          <View style={styles.circulo} />
          <View style={styles.linha}></View>
        </View>
        <View style={styles.badge}>
          {/* <Text style={styles.titulo}>{this.props.data.id}</Text> */}
          <Image source={require('../assets/images/badge.jpg')} style={{ width: 22, height: 25 }}></Image>
        </View>
        <View style={styles.parte2}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('InfoAcompanhamento', { data })}
          >
          <Text style={styles.titulo}>{this.props.data.nome}</Text>
          </TouchableOpacity>
          <Text style={styles.descricao}>Carga Horária: {this.props.data.horas}</Text>
          <Text style={styles.data}>Tipo: {this.props.data.cursoTipo.descricao}</Text>
        </View>
      </View>
    </View >
  )

}

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
  },
  circulo: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#00315a',
    position: 'relative'
  },
  linha: {
    backgroundColor: '#00315a',
    height: '1000%',
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
  badge: {
    // backgroundColor: '#F78B1F',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
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