import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CurrencyConvert from './convert-currency/Currency-convert'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CurrencyConvert/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App