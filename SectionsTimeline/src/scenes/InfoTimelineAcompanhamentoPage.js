import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, Button } from 'react-native';
import InfoTimelineSessoes from '../components/InfoTimelineSessoes.js';
import api from '../services/timelineAcompanhamento.service.js';

export default function InfoTimelineAcompanhamentoPage({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{props.route.nome}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff0',
    padding: 10,
  },
  titulo: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15,
  }
})