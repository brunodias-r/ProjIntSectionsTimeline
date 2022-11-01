import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Button, View, Separator, Alert } from 'react-native';
import React from 'react';

export default function Desafio() {

  return (
    <View style={styles.container}>
      <Text>
        Desafio
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});