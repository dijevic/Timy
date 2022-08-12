import React, { useCallback, useState } from 'react'


// components
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { Input } from '../components/pomodoro/Input'
import { Navigation } from '../components/pomodoro/Navigation'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {

    const initialState = {
        seconds: 60,
        minutes: 25
    }


    const [start, setstart] = useState(false)
    const [seconds, setseconds] = useState(initialState.seconds)
    const [minutes, setMinutes] = useState(initialState.minutes)





    const handleSeconds = () => {
        if (seconds === 0) {
            setseconds(60)
            setseconds((sec) => sec - 1)
            setMinutes((state) => state - 1)
        } else {
            setseconds((sec) => sec - 1)

        }

    }
    const handleSecondsCallback = useCallback(
        () => {
            handleSeconds()
        },
        [seconds, handleSeconds],
    )






    return (
        <div className={styles.mainContainer}>

            <div>
                <PomodoroTitle />

                <Input />

                <Time
                    start={start}
                    seconds={seconds}
                    minutes={minutes}
                    handleSeconds={handleSecondsCallback}

                />

                <ActionButtons
                    setstart={setstart}
                    setSeconds={setseconds}
                    setMinutes={setMinutes}
                />

                <Navigation />
            </div>
        </div>




    )
}
