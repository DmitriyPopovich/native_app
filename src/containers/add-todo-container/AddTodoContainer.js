import React, {useState} from "react";
import { Alert } from "react-native"
import uuid from 'react-native-uuid'
import AddTodo from "../../components/add-todo";

const AddTodoContainer = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        const newTodo = {
            id: uuid.v4(),
            title:value
        }
        if(value.trim()){
            onSubmit(newTodo)
            handlerChangeText('')
        }
        else Alert.alert('Please enter text!')
    }
    const handlerChangeText = (text) => setValue(text)

    return <AddTodo handlerChangeText={handlerChangeText} pressHandler={pressHandler} value={value}/>
}
export default AddTodoContainer

