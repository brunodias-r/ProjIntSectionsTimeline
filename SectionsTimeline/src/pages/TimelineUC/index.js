import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class TimelineUC extends Component{

  render(){

    const data = [
      {
        time: '12:00',
        title: 'Event 2',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '14:00',
        title: 'Event 3',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '16:30',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '16:30',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '16:30',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '16:25',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        time: '16:30',
        title: 'Atividade sobre schemas',
        description:
          'Segue anexo um arquivo que contém as atividades sobre o assunto lecionado na última aula. Segue anexo um arquivo que contém as atividades sobre o assunto lecionado na última aula.',
      },
      {
        time: '16:30',
        title: 'Event 4',
        description:
          'Lorem Ipsum is simply dummy text of the printing.',
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Timeline da UC</Text>
          <Timeline
            data={data}
            circleSize={18}
            circleColor="black"
            lineColor="black"
            titleStyle={styles.titleStyle}
            timeContainerStyle={styles.timeContainerStyle}
            timeStyle={styles.timeStyle}
            descriptionStyle={{ color: 'gray', margin: 0, padding: 0, }}
            options={{
              style: { paddingTop: 10 },
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
  //Timeline
  titleStyle: {
    fontWeight: 'bold',
    paddingTop: -20,
    margin: 0,
  },
  timeContainerStyle: {
    minWidth: 52,
    marginTop: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#124eee',
    color: 'white',
    padding: 0,
    borderRadius: 13,
    justifyContent: 'center'
  }
});
