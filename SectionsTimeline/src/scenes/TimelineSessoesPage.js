import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, Button } from 'react-native';
import api from '../services/timelineSessoes.service';
import TimelineSessoes from '../components/TimelineSessoes';

// export default class TimelineSessoesPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       competencias: []
//     }
//   }

//   async componentDidMount() {
//     const response = await api.get();
//     this.setState({
//       competencias: response.data
//     })
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* <Text style={styles.titulo}> Timeline da Unidade Curricular </Text> */}
//         <Button
//           title="Acompanhamento"
//           onPress={() =>
//             this.props.navigation.navigate('TimelineAcompanhamentoPage')
//           }
//         />
//         <FlatList
//           data={this.state.competencias}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => <TimelineSessoes data={item} />}
//         />
//       </SafeAreaView>
//     );
//   }

// }

export default function TimelineSessoesPage({ navigation }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async () => {
      const resp = await fetch(api.get());
      const data = await resp.json();
      setData(data);
    }
  }, []);

  // useEffect(() => {
  //    fetch(api.get())
  //      .then((data) => setData(data))
  // }, [])

  // useEffect(() => {
  //   fetch(api)
  //     .then((data) => setData(data))
  //     .then((json) => console.log(json))
  //     .catch((e) => console.log(e + "Errou."))
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Acompanhamento"
        onPress={() => navigation.navigate('Acompanhamento')} 
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<TimelineSessoes data={item} />)}
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
