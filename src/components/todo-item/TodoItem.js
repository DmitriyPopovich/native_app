import React from "react";
import { Text, TouchableOpacity} from "react-native"
import styles from "./style";

const TodoItem = ({todo, onRemove}) => {
    return (
            <TouchableOpacity 
                activeOpacity={0.3}
                onLongPress={onRemove(todo.id)}
                style={styles.todo}
            >
                <Text style={styles.text}>{todo.title}</Text>
                <TouchableOpacity
                    onPress={onRemove(todo.id)}
                >
                    <Text>&#128465;</Text>
                </TouchableOpacity>
            </TouchableOpacity>
    )
}
export default TodoItem

