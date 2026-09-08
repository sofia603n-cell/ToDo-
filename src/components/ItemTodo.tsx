import type { Todo } from '../interfaces/form'

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
                  <td>{ t.completada === true ? 
                              <span>Si</span> :
                              <span>No</span>
                      }</td>
                </tr>
    )
  
}

export default ItemTodo