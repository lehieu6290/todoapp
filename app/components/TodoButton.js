import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function TodoButton(props){
    
    let { onPress, title } = props;

    return (
        <TouchableOpacity style={ styles.button } onPress={ onPress }>
            <Text style={ styles.buttonText }>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8E44AD',
        minWidth: 50,
        padding: 9,
        borderRadius: 5,
        margin: 5,
        borderColor: '#fff',
        borderWidth: 2
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default TodoButton;