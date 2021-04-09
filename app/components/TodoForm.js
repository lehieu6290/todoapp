import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet } from "react-native";
import TodoButton from './TodoButton';

function TodoForm(props){

    let { todo, onSubmitPress,  onCancelPress, onFocus } = props;
    let [ title, setTitle ] = useState(todo ? todo.title: '');
    let [ description, setDescription ] = useState(todo ? todo.description: '');

    let submitText = todo ? "Cập nhật" : "Thêm";

    let titleInput = useRef();
    useEffect(() => {
        titleInput.current.focus();
    }, []);

    function handleSubmitPress(){

        if(!title) return;

        if(todo){
            let { id, status } = todo;
            onSubmitPress({id, title, description, status});
        }else{
            onSubmitPress({title, description});
        }

        onCancelPress();
    }

    return (
        <View style={ styles.formContainer } >
            <TextInput onFocus={ () => { if(!todo){ return } onFocus(todo.indexFlatList); } } style={ styles.textInput } ref={ titleInput } multiline={ true } onChangeText={ text => { setTitle(text) } } placeholder="Nhập tiêu đề" value={ title } />
            {/* <TextInput style={ styles.textInput } multiline={ true } numberOfLines={ 3 } onChangeText={ text => { setDescription(text) } } placeholder="Nhập mô tả" value={ description } /> */}
            <View style={ styles.buttonGroup }>
                <TodoButton title={ submitText } onPress={ handleSubmitPress } />
                <TodoButton onPress={ () => { onCancelPress() } } title="Hủy" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        backgroundColor: '#FFF',
    },

    textInput: {
        fontSize: 16,
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default TodoForm;