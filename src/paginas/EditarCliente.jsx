import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect( () => {

      const obtenerClienteAPI = async () => {
          try {
              const url = `http://localhost:4000/posts/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
                
              setCliente(resultado)

          } catch (error) {

          } 

          setTimeout(() => {
              setCargando(!cargando)   
          }, 1500)
      }
      obtenerClienteAPI()
  }, [])

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>
        
        {cliente?.nombre ? (
          <Formulario 
          cliente={cliente}
          />
        ): <p>Cliente ID No Valido</p>}
        
    </>
  )
}

export default EditarCliente