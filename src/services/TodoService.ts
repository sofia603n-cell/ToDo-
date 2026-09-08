// Los servicios controlan operaciones de logica de negocios(Crud)
// Se hace una funcion por cada operacion(de la letra de la CRUD)

import axios, { Axios } from "axios"
import type { Todo } from "../interfaces/form"

//1. Consultar los todos



export const consultarTodosFetch =async() => {
    //Se puede utilizar una dependencia para realizar operaciones asyncronas

    //fetch
    const Response=await fetch("http://localhost:3006/todos" )
    const datos = await Response.json()
    return datos
}

//1.1 consultar los todos con axios
export const consultarTodosAxios =async() => {
    //Se puede utilizar una dependencia para realizar operaciones asyncronas

    //fetch
    const Response=await axios.get("http://localhost:3006/todos" )
    const datos = await Response.data
    return datos
}


//2. Crear un todo fetch

export const crearTodoFetch =async(t: Todo) => {
    const response = await fetch("http://localhost:3006/todos",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(t)
    })
    const datos = await response.json()
    return datos
}


export const crearTodoAxios =async(t: Todo) => {
    try {
        const response = await axios.post ("http://localhost:3006/todos", t);
    
        return response.data;}
        
        catch (error) {
            console.error ("error al crear ToDO:", error);
            throw error;
        }
    }
    

// //crear un objeto tarea
// const nuevoTodo: Todo={
//     titulo:"E 200",
//     prioridad:"Alta",
//     completada:false,
//     id: "100"
// }
// crearTodoFetch(nuevoTodo)