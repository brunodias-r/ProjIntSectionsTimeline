// import { ScrollView, View, StyleSheet } from 'react-native';
// import Timeline from 'react-native-timeline-flatlist'

// const TimeLine = () => {
//   const data = [
//     {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
//     {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
//     {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
//     {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
//     {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
//   ];

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Timeline
//           data={data}
//           circleSize={20}
//           separator={true}
//           circleColor='red'
//           lineColor='blue'
//           timeStyle={styles.time}
//           descriptionStyle={styles.description}
//         >
//         </Timeline>
//       </View>
//     </ScrollView>
//   )
// }

// export default TimeLine;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ddaabb',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   time: {
//     textAlign: 'center',
//     fontSize: 10,
//     backgroundColor: 'red',
//     color: 'white',
//     padding: 5,
//     borderRadius: 13,
//     overflow: 'hidden'
//   },
//   description: {
//     fontSize: 12,
//     color: 'red'
//   }
// });

// import React in our code
import React from 'react';

// import all the components we are going to use
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// import Timeline
import Timeline from 'react-native-timeline-flatlist';

const TimeLine = () => {
  const data = [
    {
      time: '09:00',
      title: 'Event 1',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '10:45',
      title: 'Event 2',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
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
          circleSize={20}
          circleColor="black"
          lineColor="black"
          titleStyle={styles.titleStyle}
          timeContainerStyle={styles.timeContainerStyle}
          timeStyle={styles.timeStyle}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 10 },
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 5,
    fontSize: 20,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  //Timeline
  authorStyle:{
    fontWeight: 'bolder'
  },
  titleStyle: {
    fontWeight: 'bold'
  },
  timeContainerStyle: {
    minWidth: 52,
    marginTop: 1,
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

export default TimeLine;