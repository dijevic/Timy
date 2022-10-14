import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Spinner } from '../components/common/Spinner'
// import { Cronometro } from '../pages/Cronometro'
// import { Home } from '../pages/Home'
import { Pomy } from '../pages/Pomy'
// import { Temporizador } from '../pages/Temporizador'

export const AppRouter = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        window.addEventListener('load', () => {
            console.log('cargo')
            setLoading(false)
        })
    }, [])

    if (loading) {

        return (<Spinner />)
    }

    return (
        <Routes>
            <Route path="/" element={<Pomy />} />
            {/* <Route path="/pomodoro" element={<Pomy />} />
            <Route path="/cronometro" element={<Cronometro />} />
            <Route path="/temporizador" element={<Temporizador />} /> */}
        </Routes>
    )
}
