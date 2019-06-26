import React from 'react'
import BoxForm from '../components/BoxForm'
import InputForm from '../components/InputForm'

export default () => {
  return (
    <BoxForm title='Register'>
      <form>
        <InputForm type='text' name='name' placeholder='name'/>
        <InputForm type='text' name='username' placeholder='username'/>
        <InputForm type='email' name='email' placeholder='email'/>
        <InputForm type='password' name='password' placeholder='password'/>
        <InputForm type='password' name='' placeholder='re-password'/>
        <InputForm type='submit' name='submit'/>
      </form>
    </BoxForm>
  )
}
