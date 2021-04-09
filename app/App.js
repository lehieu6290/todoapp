import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList, KeyboardAvoidingView, TextInput} from 'react-native';
import EditableTodo from './components/EditableTodo';
import { fetchTodos, fetchAddTodo, fetchDeleteTodo, fetchUpdateTodo } from './utils/api';
import TodoButton from './components/TodoButton';
export default function App() {

  let [ title, setTitle ] = useState('');
  let [ todos, setTodos ] = useState([]);
  let scrollView = useRef();
  let textInput = useRef();

  function getData(){
    fetchTodos().then((data) =>{
      const todosData = data.todos;
      let indexFlatList = 0;
      setTodos(todosData.map(item => {
        return {...item, indexFlatList: indexFlatList++};
      }));
    });
  }

  useEffect(() => {
    getData();    
  }, [todos.length]);

  function handleAddTodo(todo){
    fetchAddTodo(todo)
      .then(result => {
        if(result.success){
          getData();
        }
      })
  }

  function handleEditTodo(todo){
    fetchUpdateTodo(todo)
      .then(result => {
        if(result.success){
          getData();
        }
      })
  }

  function handleRemoveTodo(todo){
    let { id } = todo;
    fetchDeleteTodo(id)
      .then(result => {
        if(result.success){
          getData()
        }
      })
  }

  function scrollViewToEnd(index){
    scrollView.current.scrollToIndex({ index : index });
  }

  function handleSubmitPress(){
    if(!title) return;

    let todo = { title };
    handleAddTodo(todo);
    textInput.current.clear();
  }

  return (
    <View style={ styles.container }>
      <View style={{ backgroundColor: '#8E44AD' }}>
        <Text style={ styles.title }>Todo App</Text>
        {/* <ToggleableTodoForm onFormSubmit={ handleAddTodo } /> */}
        <View style={ styles.formContainer } >
          <TextInput ref={ textInput } onChangeText={ text => setTitle(text) } style={ styles.textInput } placeholder="Nhập công việc" placeholderTextColor='#fff' />
          <TodoButton onPress={ handleSubmitPress } title="Thêm" />
        </View>
      </View>
      <KeyboardAvoidingView enabled={ true } style={ { flex: 1, marginTop: 10 } } >
        <FlatList 
          keyboardShouldPersistTaps={ 'handled' }
          style={ { flex: 1 } }
          ref={ scrollView }
          data={todos}
          renderItem={ ({ item }) => <EditableTodo onOpenKeyboard={ scrollViewToEnd } onFormSubmit={ handleEditTodo } onRemove={ handleRemoveTodo } key={ item.id } todo={ item } /> }
          keyExtractor={item => item.id.toString()}
        />
      </KeyboardAvoidingView>
    </View>    
  );
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
  },

  container: {
    paddingTop: 25,
    flexDirection: "column",
    flex: 1,
  },

  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },

  textInput: {
    fontSize: 16,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flex: 1,
    color: '#fff',
  },
});
