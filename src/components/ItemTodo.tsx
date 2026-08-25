import React from 'react'
import type { Todo } from '../interfaces/form'
import { FcHighPriority } from "react-icons/fc"; 


interface ItemTodoProps {

  //definir los props que va a recibir el componente
  //props: son datos que vienen del componente padre
  t:Todo
}

function ItemTodo({ t }:ItemTodoProps) {
    return (                <tr>
                  <td>{ t.id }</td>
                  <td>{ t.titulo}</td>
                  <td >{ t.prioridad }</td>
                  {/*Operador ternario:  ?:*/}
                  <td>{ (t.completada)===true? 
                              <span >Si</span> :
                              <span >No<FcHighPriority /></span>
                                          
                      }</td>
                </tr>
    )
  
}

export default ItemTodo