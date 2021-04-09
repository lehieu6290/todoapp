import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';

function EditableTodo(props){

    let { todo, onFormSubmit, onRemove, onOpenKeyboard } = props;
    let [ editFormOpen, setEditFormOpen ] = useState(false);

    function handleEditPress(){
        setEditFormOpen(true);
    }

    function handleCancelPress(){
        setEditFormOpen(false);
    }

    if(editFormOpen){
        return (
            <TodoForm onFocus={ onOpenKeyboard } todo={ todo } onSubmitPress={ onFormSubmit } onCancelPress={ handleCancelPress } />
        );
    }

    return (
        <TodoItem key={ todo.id } todo={ todo } onChecked={ onFormSubmit } onEditPress={ handleEditPress } onRemovePress={ onRemove } />
    );
}

export default EditableTodo;