import React from 'react'
import ContactoB from './ComponenteB'
const componenteA = () => {
    const contacto = new Contacto ( 'Javier', 'Archuby', 'pepe@gmail.com', false);
  return (
    <div>
      <ContactoB props = {contacto}></ContactoB>
    </div>
  )
}

export default componenteA



export class Contacto{
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado
    }
}



