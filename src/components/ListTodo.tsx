import React from 'react'
import  type {Todo} from '../interfaces/form'
import ItemTodo from './ItemTodo'


interface ListTodoProps {
  TodoList:Todo[]
}

/**
 * 
 *ListTODO: va amostrar la lista de tarea
 lista de tareas: viene del papa(App.tsx) y llegara por medio de un prop 
 */
function ListTodo({TodoList}:ListTodoProps) {
  return (

    <section>
        <h1>Mis Tareas</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>titulo</th>
              <th>prioridad</th>
              <th>completada</th>
            </tr>
            
          </thead>
          <tbody>
            {
              TodoList.map((todo: Todo)=>(
                <ItemTodo key={todo.id} t={todo} />
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </section>
      
  )
}

export default ListTodo