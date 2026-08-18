import { useState} from 'react'
import type { ChangeEvent } from 'react'
import type {TodoForm, Todo} from './interfaces/form'
import { FcHighPriority } from "react-icons/fc";
import './index.css';
const App = () => {

  //datos internos del componente//
  //encanchar  (hook) la variable 
  //contador a el componente
  //useStatte: este hook permite crear un estado( Variable reactiva)
  
  
  //estado para el formulario
  const[Formulario, setFormulario] = 
    useState<TodoForm>({
      titulo:'',
      prioridad:'Baja'
  })

  const[listaTodo, setLitadoTodo]=
                    useState<Todo[]>([
                    ])





  //funcion para incrementar la variable


  //funcion para tratar el form
  const inputChange=(event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
      //separar: el nombre del control en dos variables
      const {name, value} = event.target


      //asignar los valores del formulatio al estado:
      //operador spread: separa un objeto(form)
      setFormulario({
        ...Formulario, [name] : value
      }) 
  }

  //Function para tratater ek sumbit
  const envioForm=(event:any) => {
    //Quitar el comportamiento por defecto del form 
    event.preventDefault()

    //establecer el atributo "completada" a la tarea del formulario

    const Tarea:Todo = {
      //UUID:  es unb tipo de dato unico y Universal
      id:crypto.randomUUID(),
      ...Formulario,
      completada:false
    } 
    //spreead: separar cada TODO en el arreglo y despues volverlo a unir en otro arreglo pero en el nuevo TODO
    setLitadoTodo([...listaTodo, Tarea])
    
    //Cambiar el estado del formulario a vacio
    setFormulario({
      titulo:"",
      prioridad:"Baja"
    })
    
  }



  return (
    <>
      <div> <h1>Mis Quehaceres</h1></div>
      <br />
      <br />
      <section>
        <h2> Registrar nueva tarea</h2>
        <form onSubmit={envioForm}>
          {/*Div por cada control de formulario */}
          <div className='form-contacto textarea'>
            {/*Cata control tendra un label y un input */}
            <label htmlFor='' >Titulo:</label>
            {/*className para las clases de css en js */}
            <input 
               type="text"
               id ="titulo"
               placeholder='P.je Revisar GitHub'
               name="titulo"
               onChange={ inputChange }
               value={ Formulario.titulo }
            />
          </div>
          <div className=''>
            <label htmlFor=''>Prioridad:</label>
            <select   
              id='prioridad'
              name='prioridad'
              onChange={inputChange}
              value={Formulario.prioridad}
              > 
              {/* programacion para elejir la opcion determinada en el state del formulario*/}
              <option value="Alta" className='ope'>Alta</option>
              <option value="Media" className='ope'>Media</option>
              <option value="Baja" className='ope'>Baja</option>

            

            </select>
          </div>
         
          <div className='form-contacto button'>
            <button type='submit'> Crear ToDo</button>
          </div>
        </form>

      </section>
       <br /><br /><br /><br /><br />
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
              listaTodo.map((todo: Todo)=>(
                <tr>
                  <td>{ todo.id }</td>
                  <td>{ todo.titulo}</td>
                  <td >{ todo.prioridad }</td>
                  {/*Operador ternario:  ?:*/}
                  <td>{ (todo.completada)===true? 
                              <span >Si</span> :
                              <span >No<FcHighPriority /></span>
                                          
                      }</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </section>
    </>
    
  )
}

export default App