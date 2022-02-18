import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { ContextProvider } from './context/StepContext'

import FormStep1 from './pages/FormStep1'
import FormStep2 from './pages/FormStep2'
import FormStep3 from './pages/FormStep3'
import FormStep4 from './pages/FormStep4'

export const Router = ()  => {
    return(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<FormStep1/>} />
                    <Route path='/step2' exact element={<FormStep2/>} />
                    <Route path='/step3' exact element={<FormStep3/>} />
                    <Route path='/step4' exact element={<FormStep4/>} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}