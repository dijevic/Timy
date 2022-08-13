import React, { useState } from 'react'


// components
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { Input } from '../components/pomodoro/Input'
import { Navigation } from '../components/pomodoro/Navigation'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {




    const [start, setstart] = useState(false)
    const [pauseActived, setPauseActived] = useState(false)
    const [seconds, setseconds] = useState(60)
    const [minutes, setMinutes] = useState(25)




    // discount minutes or seconds
    const handleSeconds = () => {
        if (seconds === 0) {
            setseconds(60)
            setseconds((sec) => sec - 1)
            setMinutes((state) => state - 1)
        } else {
            setseconds((sec) => sec - 1)

        }

    }







    return (
        <div className={styles.mainContainer}>

            <div>
                <PomodoroTitle />

                <Input />

                <Time
                    start={start}
                    seconds={seconds}
                    minutes={minutes}
                    handleSeconds={handleSeconds}
                    pauseActived={pauseActived}

                />

                <ActionButtons
                    setstart={setstart}
                    setSeconds={setseconds}
                    setMinutes={setMinutes}
                    start={start}
                    seconds={seconds}
                    minutes={minutes}
                    setPauseActived={setPauseActived}
                    pauseActived={pauseActived}

                />

                <Navigation />
            </div>
        </div>




    )
}
