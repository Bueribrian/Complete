import React from 'react'

export default ({title,children}) => {
  return (
    <div className='square form-controll container'>
     <div className='form-controll-title'>
      <h1 className=''>{title}</h1>
     </div>
      {children}
    </div>
  )
}
