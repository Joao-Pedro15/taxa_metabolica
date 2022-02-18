import React, { createContext } from 'react'
import useStep from './useStep'

const Context = createContext()

function ContextProvider({ children }){
    const { data, setData, handleChange, calc } = useStep()

    return (
        <Context.Provider value={ { data, setData, handleChange, calc } }>
            { children }
        </Context.Provider>
    )
}

export { Context, ContextProvider }