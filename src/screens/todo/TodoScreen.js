import React from "react";
import TodoItem from '../../components/todo-item'
import { FlatList, ImageBackground, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './style'
import AddTodoContainer from "../../containers/add-todo-container";

const TodoScreen = ({todos, addTodo, removeTodo}) => {
  return (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.bg}
    >
      <SafeAreaView style={styles.app}>
        <AddTodoContainer onSubmit={addTodo}/>
        {todos.length?<Text>Total: {todos.length}</Text>: null}
        <FlatList
          keyExtractor={item=>item.id.toString()}
          data={todos}
          renderItem={({item}) => <TodoItem todo={item} onRemove={removeTodo}/>}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
export default TodoScreen



