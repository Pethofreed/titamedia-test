import React from 'react';
import Uno from './pictures/1.jpg'
import Dos from './pictures/2.jpg'
import Tres from './pictures/3.jpg'
import Cuatro from './pictures/4.jpg'
import Cinco from './pictures/5.jpg'
import Seis from './pictures/6.jpg'
import Siete from './pictures/7.jpg'
import Ocho from './pictures/8.jpg'
import Nueve from './pictures/9.jpg'
import Diez from './pictures/10.jpeg'
import Once from './pictures/11.jpg'
import './styles.css'

const Gallery = () => {
  const data = [
    {
      id: 1,
      src: Uno
    },
    {
      id: 2,
      src: Dos
    },
    {
      id: 3,
      src: Tres
    },
    {
      id: 4,
      src: Cuatro
    },{
      id: 5,
      src: Cinco
    },
    {
      id: 6,
      src: Seis
    },
    {
      id: 7,
      src: Siete
    },
    {
      id: 8,
      src: Ocho
    },{
      id: 9,
      src: Nueve
    },{
      id: 10,
      src: Diez
    },
    {
      id: 11,
      src: Once
    }
  ]

  return(
    <>
      <div className="gallery">
        {data.map((item, index) =>{
          return(
            <div className="pictures" key={index}>
              <img
                src={item.src}
                alt="describe wonderful somethings"
                className="photos"
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Gallery