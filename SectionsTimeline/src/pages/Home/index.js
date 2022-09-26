import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';

export default function Home(){
  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});