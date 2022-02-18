import React from 'react'
import { Link } from 'react-router-dom'
import './Step.css'

export default function Step(props, { children }) {
    return (
        <div className='step'>
        <p>Passo {props.step}/4</p>
        <h2>{props.title}</h2>
        <small>{props.subtitle}</small>
        <hr/>
        <div className='content'>
            {props.children}
        </div>
        <div className='btns'>
            <Link to={`/${props.link_prev}`}><button className='btn btn-primary'>Anterior</button></Link>
            <Link to={`/${props.link_next}`}><button className='btn btn-primary'>Próximo</button></Link>
        </div>
      </div>
    )
}
