import React from 'react'

export const SecondComponent = () => {
   const Books = [
      "MAYOR QUE TODO - CARLOS FRAIJA",
      "DE LA CARENCIA A LA ABUNDANCIA - CARLOS FRAIJA",
      "EL PODER DEL AHORA - ECKHART TOLLE",
      "EL SENGOCIO DEL SIGLO 21 - ROBERT T. KIYOSAKI",
      "HABLA MENOS Y ACTUA MAS - BRIAN TRACY"
    ]
   
  return (
    <div>
        <h2>LISTADO DE LIBROS</h2>
        <ul>
          {
            Books.length > 1 ? 
            (
              Books.map((Book, index) =>{
                return <li key={index}>{Book}</li>
            })
            ): "No exiten libros."
          }
        </ul>
    </div>
  )
}
