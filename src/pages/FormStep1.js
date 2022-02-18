import React, { useContext } from 'react'
import { Context } from '../context/StepContext'
import Step from '../components/Steps/Step'
import Aside from '../components/Aside/Aside'

function FormStep1() {
  const { data, handleChange } = useContext(Context) 

  return (
    <div className='formStep'>
    <Aside />
    <Step step="1" title="Vamos começar com seu nome e idade" subtitle="Preencha os campos com seu nome e sua idade!" link_next={data.name === '' || data.age === '' ? '' : 'step2'} link_prev=''>
      <input type="text" placeholder='Nome' className='form-control bg-transparent border-info text-light' name='name' onChange={handleChange} value={data.name} />
      <input type="number" placeholder='Idade' className='form-control bg-transparent border-info text-light' name='age' onChange={handleChange} value={data.age} />        
    </Step>
      </div>
  )
}

export default FormStep1