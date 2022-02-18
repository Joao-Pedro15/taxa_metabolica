import React, { useContext } from 'react'
import { Context } from '../context/StepContext'
import Aside from '../components/Aside/Aside'
import Step from '../components/Steps/Step'

function FormStep3() {
  const { data, setData } = useContext(Context)

  function addSex(sexo){
    setData({...data, sex:sexo})
  }

  return (
    <div className='formStep'>
    <Aside />
    <Step step="3" title="Ok, agora escolha seu sexo" subtitle="Escolha entre as duas opções, masculino e feminino! (Ao clicar a opção ficará marcado em branco)" link_next={data.sex ==='' ? 'step3' : 'step4'} link_prev='step2'>
      <div className={data.sex === 'Masculino' ? 'content_sex active' : 'content_sex'} onClick={()=>addSex('Masculino')}><i className='fas fa-mars'></i>
      </div>       
      <div className={data.sex === 'Feminino' ? 'content_sex active' : 'content_sex'} onClick={(e)=>setData({...data, sex: 'Feminino'})}><i className='fas fa-venus'></i> </div>       
    </Step>
    </div>
  )
}

export default FormStep3