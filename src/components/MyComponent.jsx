import React from 'react'

export const MyComponent = () => {

  const name="Andres"
  const repository = "https://github.com/AndresM1992/component-practice.git"
  const student = {
    name: "Andres",
    lastName: "Marquez",
    mobile: "3059242602",
    linkedinprofile: "https://www.linkedin.com/in/andres-felpe-marquez"
  }
  console.log(student)
  return (
    <div>
      <hr/>
      <p> Este es mi primer componente</p>
      <h2>Temas de React</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - hooks</li>
        <li>Comunicacion</li>
      </ul>
      <hr/>
      <h2>DATOS DEL ESTUDIANTE</h2>
      <p>Nombre:{name} </p>
      <p>Repositorio: </p>
      <p> {repository } </p>
      <hr/>
      <h2>DATOS DEL ESTUDIANTE</h2>
      <p>nombre: {student.name} </p>
      <p>apellido: {student.lastName} </p>
      <p>celular: {student.mobile} </p>
      <p>perfil de linkedin:</p>
      <p> {student.linkedinprofile} </p>
    </div>
  )
}
