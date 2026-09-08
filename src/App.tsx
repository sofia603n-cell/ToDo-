import { useState, useEffect } from 'react'
import ListTodo from './components/ListTodo'

import type { Priority, Todo } from './interfaces/form'

import FormTodo from './components/FormTodo'

import './index.css';
import { crearTodoFetch } from './services/TodoService';
//importamos subcomponentes 



const App = async () => {
    const [listaTodo, setListaTodo] =
                    useState<Todo[]>([])



//useEffect: hook es un metodo para controlar para controlar el ciclo de vida del componente
//cuando se carga el componente (App) por primera vez 

useEffect(()=>{},[])
  




  //crear funcion para añadir 
  //nueva tarea a listaTodo
  //pero aislada
  //Necesita los atributos de la nueva
  //tarea como parametros
  const addToDo = async ( titulo: string , 
                    prioridad: Priority ) => {
      //nueva tarea                
      const Tarea: Todo = {
          //UUID: tipo de dato ID unico y Universal
           id: crypto.randomUUID(),
           titulo: titulo,
           prioridad: prioridad,
           completada: false
      }
      //poner la nueva tarea
      //en la lista
  // guardar el nuevo todo en la api
    const nuevaData = await crearTodoFetch(Tarea)       
    setListaTodo((prev)=>[...prev , nuevaData])
  }


  return (
    <>
    
      <FormTodo addToDo={addToDo} />

      <ListTodo TodoList={listaTodo} />

    </>
    
  )
}

export default App