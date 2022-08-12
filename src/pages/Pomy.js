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
        seconds: 5,
        minutes: 5
    }


    const [start, setstart] = useState(false)
    const [seconds, setseconds] = useState(initialState.seconds)





    const handleSeconds = () => {
        if (seconds === 0) {
            setseconds(60)
            setseconds((sec) => sec - 1)
        } else {
            setseconds((sec) => sec - 1)

        }

    }
    const handleSecondsCallback = useCallback(
        () => {
            handleSeconds()
        },
        [seconds],
    )








    return (
        <div className={styles.mainContainer}>

            <div>
                <PomodoroTitle />

                <Input />

                <Time
                    start={start}
                    seconds={seconds}
                />

                <ActionButtons
                    setstart={setstart}
                    setSeconds={setseconds}
                    handleSeconds={handleSecondsCallback}
                    seconds={seconds}
                    startTiming={start}
                />

                <Navigation />
            </div>
        </div>




    )
}
