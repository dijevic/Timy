import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cronometro } from '../pages/Cronometro'
import { Home } from '../pages/Home'
import { Pomy } from '../pages/Pomy'
import { Temporizador } from '../pages/Temporizador'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomodoro" element={<Pomy />} />
            <Route path="/cronometro" element={<Cronometro />} />
            <Route path="/temporizador" element={<Temporizador />} />
        </Routes>
    )
}
