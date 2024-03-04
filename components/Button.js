import { Text, View, StyleSheet} from 'react-native';

export default function Button() {
  
   return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Download CV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});