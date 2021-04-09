export const fetchTodos = async () => {
    const response = await fetch('http://192.168.1.101:8080/api/todos');
    const json = await response.json();
    return json;
}

export const fetchAddTodo = async (data) => {
    const response = await fetch('http://192.168.1.101:8080/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    const json = await response.json();
    return json;
}

export const fetchDeleteTodo = async (id) => {
    const response = await fetch(`http://192.168.1.101:8080/api/todo/${id}`, {
        method: 'DELETE'
    });
    
    const json = await response.json();
    return json;
}

export const fetchUpdateTodo = async (data) => {
    const response = await fetch('http://192.168.1.101:8080/api/todo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const json = await response.json();
    return json;
}