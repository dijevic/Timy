import React, { useRef, useState } from 'react'


// components
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { ModalSettings } from '../components/pomodoro/ModalSettings'
import { Input } from '../components/pomodoro/Input'
import { Navigation } from '../components/pomodoro/Navigation'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'
import { timingTypesModes } from '../config/modes'
import { modeContext } from '../context/mainContext'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {


    const [start, setstart] = useState(false)
    const [pauseActived, setPauseActived] = useState(false)
    const [reset, setReset] = useState(false)



    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [timingMode, setTimingMode] = useState(timingTypesModes.pomodoro)

    const pomodoroCompleted = useRef(false)


    const [openModal, setOpenModal] = useState(false)

    const handlePomodoroCompleted = () => {

        setstart(false)
        setSeconds(60)
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

        // handle and reset the seconds whend it turns zero but the pomodoro isn't completed

        if (seconds === 0 && !pomodoroCompleted.current) {
            setSeconds(60)
            setSeconds((sec) => sec - 1)
            setMinutes((state) => state - 1)


        } else {

            // discount seconds
            setSeconds((sec) => sec - 1)

        }


    }





    return (
        <>

            < modeContext.Provider value={{ timingMode, setTimingMode }}>

                <div className={styles.mainContainer}>

                    <div>
                        <PomodoroTitle />


                        <Time
                            setstart={setstart}
                            start={start}
                            seconds={seconds}
                            minutes={minutes}
                            pauseActived={pauseActived}
                            setSeconds={setSeconds}
                            setMinutes={setMinutes}
                            setPauseActived={setPauseActived}
                            handleTiming={handleTiming}
                            reset={reset}
                            setReset={setReset}


                        />

                        <ActionButtons
                            setstart={setstart}
                            setSeconds={setSeconds}
                            setMinutes={setMinutes}
                            start={start}
                            setPauseActived={setPauseActived}
                            pauseActived={pauseActived}
                            setReset={setReset}

                        />

                        <Navigation setOpenModal={setOpenModal} />
                        <Input />


                    </div>
                </div>


                {
                    (openModal) &&
                    <ModalSettings />

                }



            </modeContext.Provider>


        </>




    )
}
