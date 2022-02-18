import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/StepContext'
import Aside from '../components/Aside/Aside'
import Step from '../components/Steps/Step'

function FormStep4() {
  const { data, calc } = useContext(Context)
  const [res, setResp] = useState('')

  useEffect(()=>{
      let resp = calc()
      setResp(resp)
  }, [])


  if(!data || !res){
      return <h1>loading...</h1>
  }


  return (
    <div className='formStep'>
    <Aside />
    <Step step="4" title="Taxa Metabólica Basal" subtitle="Suas calorias diárias!" link_next='step4' link_prev='step3'>
        <table className='table table-transparent text-light'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Sexo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.height}</td>
                    <td>{data.weight}</td>
                    <td>{data.sex}</td>
                </tr>
            </tbody>
        </table>
        <h1>Calorias: {res}</h1>
    </Step>
    </div>
  )
}

export default FormStep4