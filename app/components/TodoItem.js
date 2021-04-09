import React, { useState  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CheckBox from 'react-native-check-box';
import TodoButton from './TodoButton';

function TodoItem(props){

    let { id, title, description, status } = props.todo;
    let { onEditPress, onRemovePress, onChecked } = props;

    let [ ckbChecked, setCkbCheced ] = useState(status);

    function ckbOnClick(){
        onChecked({ id, title, description, status: !ckbChecked });
        setCkbCheced(!ckbChecked);
    }

    function styleChange(){
        if(ckbChecked){
            return styles.textLine;
        }else{
            return styles.text;
        }
    }

    return (
        <View style={ styles.todoContainer }>                
            <CheckBox style={ { paddingLeft: 5, paddingRight: 5 } } onClick={ ckbOnClick } isChecked={ ckbChecked } />
            <View style={ { flexShrink: 1, flex: 1 } }>
                <Text onPress={ () => onEditPress() } style={ [ styleChange(), styles.titleText ] }>{ title }</Text>
            </View>
            <TodoButton title="Xóa" onPress={ () => onRemovePress(props.todo) } />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#8E44AD',
    },

    textLine: {
        fontSize: 16,
        textDecorationLine: "line-through",
        color: 'gray',
    },

    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },

    titleText: {
        fontWeight: "bold",
    },

    todoContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default TodoItem;