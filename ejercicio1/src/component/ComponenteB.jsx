import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './ComponenteA'


const ComponenteB = ({Contacto}) => {
  return (
    <div>
     <h2>
        Nombre: {Contacto.nombre}
     </h2>
     <h2>
        Apellido: {Contacto.apellido}
     </h2>
     <h2>
        email: {Contacto.email}
     </h2>
     <h2>
        Conectado: {Contacto.conectado ? ' Contacto En Línea': 'Contacto No Disponible'}
     </h2>
    </div>
  )
}

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
