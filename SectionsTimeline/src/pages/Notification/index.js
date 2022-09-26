import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function Notification(){
  return (
    <View style={styles.container}>
      <Text>
        Notification
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});