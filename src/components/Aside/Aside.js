import React from 'react'
import './Aside.css'
import { useLocation } from 'react-router-dom'

export default function Aside() {
    const location = useLocation().pathname
  return (
        <aside>
            <div className={location === '/' ? 'aside_container active' : 'aside_container' }>
                <div className='text'>
                    <h4>Pessoal</h4>
                    <small>Se identifique</small>
                </div>
                <div className='icon'>
                    <i className="fas fa-user-alt"></i>
                </div>
                <div className='ball'></div>
            </div>

            <div className={location === '/step2' ? 'aside_container active' : 'aside_container' }>
                <div className='text'>
                    <h4>Dados</h4>
                    <small>Informe alguns dados necessários</small>
                </div>
                <div className='icon'>
                    <i className="fas fa-database"></i>
                </div>
                <div className='ball'></div>
            </div>

            <div className={location === '/step3' ? 'aside_container active' : 'aside_container' }>
                <div className='text'>
                    <h4>Sexo</h4>
                    <small>Informe seu sexo para completar o formulário</small>
                </div>
                <div className='icon'>
                    <i className="fas fa-venus-mars"></i>
                </div>
                <div className='ball'></div>
            </div>

            <div className={location === '/step4' ? 'aside_container active' : 'aside_container' }>
                <div className='text'>
                    <h4>Concluído</h4>
                    <small>Veja o resultado da sua taxa metabolica basal</small>
                </div>
                <div className='icon'>
                    <i class="fas fa-clipboard-list"></i>
                </div>
                <div className='ball'></div>
            </div>
        </aside>
    )
}