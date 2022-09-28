import { StyleSheet, Text, StatusBar, View } from 'react-native';
import React, {useState, useEffect } from 'react';
import StepIndicator from 'react-native-step-indicator';
 
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

export default function Atendance(){
  const data = [
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
    {
      label: 'Ipsum Lorem',
      status: 'In progress',
      dateTime: 'Sun, 4th Nov 08;34PM'
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBarStyle} barStyle="light-content">
        <View style={styles.viewTwoStyle}>
          <Text style={styles.textTwoStyle}>Acompanhamento</Text>
        </View>
        <View style={styles.viewThreeStyle}>
          
        </View>
      </StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarStyle:{
    backgroundColor: '#ee0aae',
  },
  viewTwoStyle:{
    height: 55,
    padding: 10,
    width: '100%',

    backgroundColor: '#000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTwoStyle:{
    color: '#f22f2f',
    fontSize: 22,
    fontWeitgh: 'bold'
  },
  viewThreeStyle:{

  }
});