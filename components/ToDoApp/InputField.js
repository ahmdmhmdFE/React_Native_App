import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function InputField({ value, onChangeText, onPress }){
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="ADD TASK ....."
        value={value}
        onChangeText={onChangeText}
      />
      
<Feather name="plus" onPress={onPress} style={styles.btn}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 10,
    borderColor: 'white',
    borderWidth: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  btn:{
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 25,
  }
});







