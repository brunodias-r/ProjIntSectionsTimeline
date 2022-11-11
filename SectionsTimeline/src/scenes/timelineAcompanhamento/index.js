import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';
import TimelineAcompanhamento from '../../components/timelineAcompanhamento/index.js';
import api from '../../services/timelineAcompanhamento.service.js';

export default class TimelineAcompanhamentoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursos: []
    }
  }

  async componentDidMount() {
    const response = await api.get('api/Curso');
    this.setState({
      cursos: response.data
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}> Timeline de Acompanhamento </Text>
        <FlatList
          data={this.state.cursos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TimelineAcompanhamento data={item} />}
        />
      </SafeAreaView>
    );
  }
}

// export default function TimelineAcompanhamentoPage() {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const caminho = 'api/Curso';

//   useEffect(() => {
//     fetch(api+caminho)
//     .then((response)=>response.json())
//     .catch((error)=>console.error(error))
//     .finally(()=>setLoading(false))
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titulo}> Timeline de Acompanhamento </Text>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => (<TimelineAcompanhamento data={item} />)}
//       />
//     </SafeAreaView>
//   );
// }

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