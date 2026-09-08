// Los servicios controlan operaciones de logica de negocios(Crud)
// Se hace una funcion por cada operacion(de la letra de la CRUD)

import axios from "axios"
import type { Todo } from "../interfaces/form"

//1. Consultar los todos



export const consultarTodosFetch =async() => {
    //Se puede utilizar una dependencia para realizar operaciones asyncronas

    //fetch
    const Response=await fetch("http://localhost:3006/todos" )
    const datos = await Response.json()
    console.log(datos)
}

//1.1 consultar los todos con axios
export const consultarTodosAxios =async() => {
    //Se puede utilizar una dependencia para realizar operaciones asyncronas

    //fetch
    const Response=await axios.get("http://localhost:3006/todos" )
    const datos = await Response.data
    console.log(datos)
}


//2. Crear un todo fetch

const crearTodoFetch =async(t: Todo) => {
    const response = await fetch("http://localhost:3006/todos",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(t)
    })
    const datos = await response.json()
    console.log(datos)
}

//crear un objeto tarea
const nuevoTodo: Todo={
    titulo:"E 200",
    prioridad:"Alta",
    completada:false,
    id: "100"
}
crearTodoFetch(nuevoTodo)