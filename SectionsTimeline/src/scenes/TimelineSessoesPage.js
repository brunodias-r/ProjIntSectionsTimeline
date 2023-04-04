import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Moment from 'moment';
import CheckIcon from '@mui/icons-material/Check';
import Schedule from '@mui/icons-material/Schedule';

export default function TimelineSessoesPage() {

  const [imagem, setImagem] = useState(/*<Schedule style={styles.icone} />*/require('../assets/images/relogio.png'));
  const [icone, setIcone] = useState()
  const [dataEncontro, setDataEncontro] = useState([]);
  const [dataObjeto, setDataObjeto] = useState([]);
  const [dataSituacao, setDataSituacao] = useState([]);


  const fetchDataEncontro = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Encontro");
    const dataEncontro = await resp.json();
    setDataEncontro(dataEncontro);
    console.log(dataEncontro)
  };

  const fetchDataObjeto = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/ObjetoAprendizagem");
    const dataObjeto = await resp.json();
    setDataObjeto(dataObjeto);
    console.log(dataObjeto)
  };

  const fetchDataSituacao = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/ObjetoAprendizagem");
    const dataSituacao = await resp.json();
    setDataSituacao(dataSituacao);
    console.log(dataSituacao)
  };

  useEffect(() => {
    fetchDataObjeto();
    fetchDataSituacao();
    fetchDataEncontro();
  }, []);

  function trocarImagem() {
    setImagem(require('../assets/images/verifica.png'))
    // setImagem(<CheckIcon style={styles.icone} />)
  }

  Moment.locale('pt-br');

  function capitalize(dia) {
    return dia.substring(0, 1).toLocaleUpperCase() +
      dia.substring(1).toLocaleLowerCase();
  }

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.timeline}>
        <View style={styles.parte1}>
          <View style={styles.circulo}>
            {/* <Schedule source={imagem} style={styles.icone} /> */}
            <Image source={require('../assets/images/relogio.png')} style={{ width: 22, height: 25 }}></Image>
          </View>
          <View style={styles.linha}></View>
        </View>
        {/* <View style={styles.badge}>
          <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
        </View> */}
        {/* <View style={styles.parte2}>
          <Text style={styles.titulo}>{item.dia}</Text>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.descricao}>Descrição: {item.descricao}</Text>
          <TouchableOpacity style={styles.button} onPress={openScreen} onPressOut={trocarImagem}>
            <Text style={styles.detalhes}>Detalhes</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.parte2}>
          <Text style={styles.titulo}>{Moment(item.horaInicio).format('dddd')}
            , {Moment(item.horaInicio).format('L')}</Text>
          <Text style={styles.descricao}>{item.observacao}</Text>
          <Text style={styles.descricao}>Situação de aprendizagem</Text>
          <Text style={styles.descricao}>Objeto de aprendizagem</Text>
          <Text style={styles.descricao}>Atividade</Text>
          <TouchableOpacity style={styles.button} onPress={trocarImagem}>
            <Text style={styles.detalhes}>Detalhe do encontro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={dataEncontro}
        extraData={dataObjeto}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  timeline: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    padding: 5,
  },
  tituloTimeline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    justifyContent: 'center'
  },
  parte1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 32
  },
  circulo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00315a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    backgroundColor: '#C5C5C5',
    height: '200%',
    width: 3,
    justifyContent: 'center',
  },
  parte2: {
    flex: 7,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 10,
    boxShadow: "4px 2px 4px 4px rgba(0, 0, 0, 0.15)",
    /************/
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
    fontSize: 24,
    color: "#092C4C",
  },
  descricao: {
    fontSize: 20,
    color: '#000',
    marginTop: 10,
  },
  data: {
    fontSize: 15,
    color: '#656565',
  },
  button: {
    backgroundColor: '#092C4C',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    paddingTop: 10,
    marginTop: 10,
  },
  detalhes: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icone: {
    color: 'white',
  }
});