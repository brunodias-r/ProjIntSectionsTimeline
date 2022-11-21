// import React, { Component, useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, FlatList, Text, View, Button } from 'react-native';
// import InfoTimelineSessoes from '../components/InfoTimelineSessoes.js';
// import TimelineSessoes from '../components/TimelineSessoes.js';
// import api from '../services/timelineUC.service.js';

// export default function TimelineSessoesPage({ navigation }) {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="Acompanhamento" onPress={() =>
//         navigation.navigate('Acompanhamento')
//       } />
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (<TimelineSessoes data={item} />)}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#ff0',
//     padding: 10,
//   },
//   titulo: {
//     fontWeight: 'bold',
//     color: 'black',
//     fontSize: 18,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     padding: 15,
//   }
// })