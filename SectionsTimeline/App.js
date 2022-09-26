import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaaeee',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   }
// });