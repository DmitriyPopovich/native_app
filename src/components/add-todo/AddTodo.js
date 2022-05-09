import React from "react";
import {
    View,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native"
import styles from "./style";

const AddTodo = ({handlerChangeText, pressHandler, value}) => {
    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={handlerChangeText}
                value={value}
                placeholder="Enter todo text..."
                placeholderTextColor="white"
                keyboardType="default"
            />
            <TouchableOpacity
                style={styles.button}
            >
                <Button
                    onPress={pressHandler}
                    title="Add" 
                    style={styles.text}
                />
            </TouchableOpacity>
        </View>
    )
}
export default AddTodo

