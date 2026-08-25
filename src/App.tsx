import { useState} from 'react'
import ListTodo from './components/ListTodo'

import type { TodoForm, Todo } from './interfaces/form'

import FormTodo from './components/FormTodo'

import './index.css';
//importamos subcomponentes 



const App = () => {
    const [listaTodo, setListaTodo] =
                    useState<Todo[]>([])
  
  //crear funcion para añadir 
  //nueva tarea a listaTodo
  //pero aislada
  //Necesita los atributos de la nueva
  //tarea como parametros
  const addToDo = ( titulo: string , 
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
      setListaTodo((prev)=>[...prev , Tarea])
  }


  return (
    <>
    
      <FormTodo addToDo={addToDo} />

      <ListTodo TodoList={listaTodo} />

    </>
    
  )
}

export default App