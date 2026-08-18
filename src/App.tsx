import { useState} from 'react'
import type { ChangeEvent } from 'react'
import type {TodoForm, Todo} from './interfaces/form'

const App = () => {

  //datos internos del componente//
  //encanchar  (hook) la variable 
  //contador a el componente
  //useStatte: este hook permite crear un estado( Variable reactiva)
  const[contador, setContador] = useState<number>(10)
  
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
  const incrementar = () => {
    //funcion del estado para modificar o asignar valor al estado 
    //para evitar la perdida del dato, se trabaja con una funcion reductora
    //prev:toma el dato anterior del estado
    setContador((prev)=>(prev + 1))
  }
  const decrementar = () => {
    //funcion del estado para modificar o asignar valor al estado 
    //para evitar la perdida del dato, se trabaja con una funcion reductora
    //prev:toma el dato anterior del estado
    setContador((prev)=>(prev - 1))
  }

  //funcion para tratar el form
  const inputChange=(event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
      //separar: el nombre del control en dos variables
      const {name, value} = event.target
      console.log(`${name} - ${value}`)


      //asignar los valores del formulatio al estado:
      //operador spread: separa un objeto(form)
      setFormulario({
        ...Formulario, [name] : value
      }) 
  }

  //Function para tratater ek sumbit
  const envioForm=(event:any) => {
    event.preventDefault()

    //establecer el atributo "completada" a la tarea del formulario

    const Tarea:Todo = {
      ...Formulario,
      completada:false
    } 
    //spreead: separar cada TODO en el arreglo y despues volverlo a unir en otro arreglo pero en el nuevo TODO
    setLitadoTodo([...listaTodo, Tarea])
  }



  return (
    <>
      <div>Mis Quehaceres</div>
      <p>{ contador}</p>
      <button onClick={incrementar}>Incrementar Contador</button>
      <button onClick={decrementar} > Decrementar Contador</button>
      {/* el formulatiopara el regustro de nuevo todo*/}
      <section>
        <h2> Registrar nueva tarea</h2>
        <form onSubmit={envioForm}>
          {/*Div por cada control de formulario */}
          <div>
            {/*Cata control tendra un label y un input */}
            <label htmlFor='' >Titulo:</label>
            <input type="text"
               id ="titulo"
               placeholder='P.je Revisar GitHub'
               name="titulo"
               onChange={inputChange}
            />
          </div>
          <div>
            <label htmlFor=''>Prioridad:</label>
            <select   
              id='prioridad'
              name='prioridad'
              onChange={inputChange}
              > 
              <option value="Alta" >Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>


            </select>
          </div>
          <div>
            <button type='submit'> Crear Todo</button>
          </div>
        </form>

      </section>
    </>
    
  )
}

export default App