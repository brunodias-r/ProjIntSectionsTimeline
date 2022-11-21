import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, Button } from 'react-native';
import TimelineAcompanhamento from '../components/TimelineAcompanhamento.js';
import api from '../services/timelineAcompanhamento.service.js';

// export default class TimelineAcompanhamentoPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       cursos: []
//     }
//   }

//   async componentDidMount() {
//     const response = await api.get('api/Curso');
//     this.setState({
//       cursos: response.data
//     })
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* <Text style={styles.titulo}> Timeline de Acompanhamento </Text> */}
//         <Button
//           title="Timeline da Unidade Curricular"
//           onPress={() =>
//             navigation.navigate('TimelineSessoes')
//           }
//         />
//         <FlatList
//           data={this.state.cursos}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => <TimelineAcompanhamento data={item} />}
//         />
//       </SafeAreaView>
//     );
//   }
// }

export default function TimelineAcompanhamentoPage({ navigation }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async () => {
      const resp = await fetch(api);
      const data = await resp.json();
      setData(data);
    }
  }, []);

  // useEffect(() => {
  //   fetch(api)
  //     .then((data) => setData(data))
  //     .then((json) => console.log(json))
  //     .catch((e) => console.log(e+"Errou."))
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Sessões" 
        onPress={() => navigation.navigate('Sessoes')} 
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (<TimelineAcompanhamento data={item} />)}
      />
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