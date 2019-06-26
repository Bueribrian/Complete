import React from 'react'

export default ({type, placeholder,name,handleChange}) => {
  return (
   <div className='form-group'>
     <input 
     className={`input square-blue ${type==='submit'?'input-submit':null}`}
     type={type} placeholder={placeholder} 
     name={name}
     required
     onChange={handleChange}/>
   </div>
  )
}
