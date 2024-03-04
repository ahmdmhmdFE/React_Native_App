import { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from './Header';
import InputField from './InputField';
import TodoItem from './ToDoItem';

export default function ToDoApp(){
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
      setTodoInput('');
    } else {
      alert('Please enter a todo!');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const handleCompleteTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  };

  const handleIncompleteTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: false } : todo));
  };

  return (
    <View style={styles.container}>
      <Header />
      <InputField
        value={todoInput}
        onChangeText={text => setTodoInput(text)}
        onPress={handleAddTodo}
      />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            text={item.text}
            completed={item.completed}
            onPressEdit={() => handleEditTodo(item.id, 'Edited Todo')}
            onPressDelete={() => handleDeleteTodo(item.id)}
            onPressComplete={() => handleCompleteTodo(item.id)}
            onPressIncomplete={() => handleIncompleteTodo(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});