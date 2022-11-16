import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';
import TimelineUC from '../../components/timelineUC/index.js';
import api from '../../services/timelineUC.service.js';

export default class TimelineUCPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      competencias: []
    }
  }

  async componentDidMount() {
    const response = await api.get('api/Competencia');
    this.setState({
      competencias: response.data
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.titulo}> Timeline da Unidade Curricular </Text> */}
        <FlatList
          data={this.state.competencias}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TimelineUC data={item} />}
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