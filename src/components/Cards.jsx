import React from 'react'
/* aqui importamos la ruta de components Card */
import Card from './Card'
/* traemos desde la carpeta assets las 3 imagenes que usaremos */
import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'

/* creamos una constante para card*/ 
const cards =[
    {
        id: 1,
        title: 'Soporte Ti',
       /*  llamamos a la imagen 1  */
        image: imagen1,
        url: 'https://fcconislla.com/'  
    },
    {
        id: 2,
        title: 'IES Cura Valera',
       /*  llamamos a la imagen 2   */
        image: imagen2,
        url: 'https://iescuravalera.fcconislla.com/'
    },
    {
        id: 3,
        title: 'Moodle',
       /*  llamamos a la imagen 2   */
        image: imagen3,
        url: 'http://educacionfcc.fcconislla.com/'
    }
]

function Cards() {
  return (
 /* aqui le damos forma a los cards */
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
               {/*  por cada recorrido devuelte esta tarjeta  */ }
                {
                cards.map(card => (
                    /* agregamos key se relaciona con el id de cada card */
                    <div className="col-md-4" key={card.id} >
                    {/* propiedades conectamos con los titulos, imagenes y url   */}  
                    <Card title={card.title} imageSource={card.image} url={card.url}/>
                    </div>
                ))
                }
        </div>   
    </div>
  )
}

export default Cards