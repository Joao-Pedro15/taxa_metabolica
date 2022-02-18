import React, { useContext } from 'react'
import { Context } from '../context/StepContext'
import Aside from '../components/Aside/Aside'
import Step from '../components/Steps/Step'

function FormStep2() {
  const { data, handleChange } = useContext(Context)

  return (
    <div className='formStep'>
    <Aside />
    <Step step="2" title={`Muito ben ${data.name}, agora sua altura e peso`} subtitle="Preencha os campos com seu peso e sua altura!" link_next={data.height === '' || data.weight === '' ? 'step2' : 'step3'} link_prev=''>
      <input type="number" placeholder='Altura' className='form-control bg-transparent border-info text-light' name='height' onChange={handleChange} value={data.height} />
      <input type="number" placeholder='Peso' className='form-control bg-transparent border-info text-light' name='weight' onChange={handleChange} value={data.weight} />        
    </Step>
    </div>
  )
}

export default FormStep2