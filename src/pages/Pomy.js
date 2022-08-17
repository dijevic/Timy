import React, { useState, useRef } from 'react'


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
    const [minutes, setMinutes] = useState(localStorage.getItem('minutes') || 25)
    const pomodoroCompleted = useRef(false)




    const handlePomodoroCompleted = () => {

        setstart(false)
        setseconds(60)
        setMinutes(25)
        pomodoroCompleted.current = true


    }



    // discount minutes or seconds
    const handleTiming = () => {


        // verify if the pomodoro is completed

        if (seconds === 0 && minutes === 0) {
            handlePomodoroCompleted()
        }

        // discount the first minute when starting the timing


        if (seconds === 60 && start) {
            setMinutes((state) => state - 1)

        }

        // handle and reset the seconds whend it turns zero

        if (seconds === 0 && !pomodoroCompleted.current) {
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
                    handleTiming={handleTiming}
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
