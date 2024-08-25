import React from 'react'
import "../styles/style.css"
const Picture = ({src,photographer}) => {
  return (
    <div className='image'>
      <div className='imgDiv'>
        <img src={src} alt="" className='imgHover'/>
        </div>
      <div className='photo'>
        {photographer}
      </div>
      </div>
  )
}

export default Picture;