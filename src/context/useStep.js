import { useState } from 'react'

export default function useStep(){
    const [data, setData] = useState({ name:'', age:'', height:'', weight:'', sex:'' })

    const handleChange = (e) => setData({...data, [e.target.name]: e.target.value })

    function calc(){
        const male = 66 + (13.8 * data.weight) + (5 * data.height) - (6.8 * data.age)
        const female = 655 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age)
        if(data.sex === 'Masculino') return Math.round(male)
        if(data.sex === 'Feminino') return Math.round(female)
    }

    return { data, setData, handleChange, calc }
}