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
    const [minutes, setMinutes] = useState(1)




    // discount minutes or seconds
    const handleSeconds = () => {

        // discount the first minute when starting the timing

        if (seconds === 60 && start) {
            setMinutes((state) => state - 1)

        }

        // handle and reset the seconds whend it turns zero

        if (seconds === 0) {
            setseconds(60)
            setseconds((sec) => sec - 1)
            setMinutes((state) => state - 1)

        } else {

            // discount seconds
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
