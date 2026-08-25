
import type { ChangeEvent } from 'react'
import { useState} from 'react'
import type { Priority, TodoForm } from '../interfaces/form'

//interface en la cual defienimos prop funcioon que va a recibir el componente

interface FormTodoProps {
    addToDo: (titulo:string, prioridad:Priority) => void
}

function FormTodo({ addToDo }:FormTodoProps) {
    const[Formulario, setFormulario] = 
    useState<TodoForm>({
      titulo:'',
      prioridad:'Baja'
    })

    const inputChange=(event:ChangeEvent<HTMLInputElement> | 
                                ChangeEvent<HTMLSelectElement>)=>{
          //separar: el nombre del control en dos variables
          const {name, value} = event.target
    
    
          //asignar los valores del formulatio al estado:
          //operador spread: separa un objeto(form)
          setFormulario({
            ...Formulario, [name] : value
            
          }) 
      }
    
    const envioForm=(event:any)=>{
        event.preventDefault()
        addToDo(Formulario.titulo, Formulario.prioridad)

    setFormulario({
        titulo:'',
        prioridad:'Baja'
    })

    }

  
     //funcion para tratar el form
      
 //estado para el formulario



    
  return (
    <section>
        <h2> Registrar nueva tarea</h2>
        <form onSubmit={envioForm}>
          {/*Div por cada control de formulario */}
          <div>
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
          <div>
            <label htmlFor=''>Prioridad:</label>
            <select   
              id='prioridad'
              name='prioridad'
              onChange={inputChange}
              value={Formulario.prioridad}
              > 
              {/* programacion para elejir la opcion determinada en el state del formulario*/}
              <option value="Alta" className='alta'>Alta</option>
              <option value="Media" className='media'>Media</option>
              <option value="Baja" className='baja'>Baja</option>

            

            </select>
          </div>
         
          <div>
            <button type='submit'> Crear ToDo</button>
          </div>
        </form>

      </section>
      
  )
}

export default FormTodo