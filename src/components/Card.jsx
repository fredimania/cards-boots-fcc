import React from 'react'

/* agremos la propiedad title, imagen y url paginas  */
function Card({title, imageSource, url }) {
  return (
      /* el texto lo centramos para darle forma un acabado  */
      <div className="card text-center bg-dark">
      {/*  llamamos a la imagen */}
      <img src={imageSource} alt=""/>
      {/* le damos color al texto */}
      <div className="card-body text-light">
{/*       le indicamos que solo usaremos title
 */}          <h4 className="card-title">{title}</h4> 
          <p className="card-text" text-secondary>ReactJS es una de las librerías más
             populares de JavaScript para el desarrollo de aplicaciones
              móviles y web. Creada por Facebook, React contiene una 
              colección de fragmentos de código JavaScript reutilizables
               utilizados para crear interfaces de usuario (UI) llamadas
                componentes.</p>
          {/* agreamos algunas clases de bootstrap y utilizamos la url, la url abrira en una ventana nueva      */}   
          <a href={url} className="btn btn-outline-secondary rounded-0"target="_blank">
              Presiona aquí
          </a>
        </div>    
      </div>
  )
}

export default Card