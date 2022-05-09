import React, {useState} from "react";
import TodoScreen from "../../screens/todo/TodoScreen";

const TodoScreenContainer = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos, todo])
        // setTodos([])
    }
    const removeTodo = (id) => () => {
        setTodos(prev => prev.filter(todo=>todo.id !== id))
    }
    return (
        <TodoScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
    )
}
export default TodoScreenContainer



