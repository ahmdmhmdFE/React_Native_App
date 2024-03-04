import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem ({ text, completed, onPressEdit, onPressDelete, onPressComplete, onPressIncomplete }){
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={onPressEdit}>
        <Text style={[styles.todoText, completed ? styles.completedTodo : null]}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onPressDelete}>
          <Text style={styles.deleteButton}><MaterialIcons name="delete-forever" size={25} color="#f44336" /></Text>
        </TouchableOpacity>
        {completed ? (
          <TouchableOpacity onPress={onPressIncomplete}>
            <Text style={styles.incompleteButton}><AntDesign name="close" size={25} color="#FFA500" /></Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressComplete}>
            <Text style={styles.completeButton}><FontAwesome name="check" size={25} color="#4CAF50" /></Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    color: '#f44336',
    marginRight: 10,
  },
  completeButton: {
    color: '#4CAF50',
    marginRight: 10,
  },
  incompleteButton: {
    color: '#FFA500',
    marginRight: 10,
    fontWeight: 'bold'
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#FFA500',
  },
});

