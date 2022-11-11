import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class TimelineUC extends Component{

  render(){

    const data = [
      {
        time: '14:00 22/08/2022',
        title: 'Avaliação do ciclo 1.',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Atividade de relacionamento de tabelas.',
        description:
          'Crie os relacionamentos entre as tabelas de maneira normalizada.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Atividade de consultas com ORDER BY e GROUP BY.',
        description:
          'Crie consultas usando order by e group by na tabela de agencias e automóveis.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Responda o questionário de normalização em banco de dados.',
        description:
          'Responda ao questionário de normalização de tabelas no banco de dados.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Atividade sobre schemas',
        description:
          'Segue anexo um arquivo que contém as atividades sobre o assunto lecionado na última aula. Segue anexo um arquivo que contém as atividades sobre o assunto lecionado na última aula.',
      },
      {
        time: '14:00 22/08/2022',
        title: 'Criar scripts de consulta',
        description:
          'Crie consultas por modelo, marca e placa na tabela de automóveis.',
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Timeline da UC</Text>
          <Timeline
            showTime={false}
            eventContainerStyle={styles.containerTimeline}
            data={data}
            circleSize={18}
            circleColor="black"
            lineColor="black"
            titleStyle={styles.titleStyle}
            timeContainerStyle={styles.timeContainerStyle}
            timeStyle={styles.timeStyle}
            descriptionStyle={{ color: 'gray', margin: 0, paddingTop: 0, }}
            options={{
              style: { paddingTop: 0 }
            }}
          />
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    padding: 20,
    fontSize: 20,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  containerTimeline:{
    flexDirection: 'column'
  },
  //Timeline
  titleStyle: {
    fontWeight: 'bold',
    paddingTop: -0,
    marginTop: 0,
  },
  timeContainerStyle: {
    minWidth: 30,
    marginTop: 0,
    paddingTop: 0,
    justifyContent: 'center',
  },
  timeStyle: {
    textAlign: 'center',
    color: 'black',
    padding: 0,
    justifyContent: 'center'
  }
});


