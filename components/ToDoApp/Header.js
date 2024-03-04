import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header(){
  return (
    <View style={styles.header}>
    <MaterialCommunityIcons name="pen-plus" size={50} color="#4CAF50"/>
      <Text style={styles.title}>TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


