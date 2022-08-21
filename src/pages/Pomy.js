import React, { useRef, useState } from 'react'

// context
import { modeContext } from '../context/mainContext'



// components
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { ModalSettings } from '../components/pomodoro/ModalSettings'
import { Input } from '../components/pomodoro/Input'
import { Navigation } from '../components/pomodoro/Navigation'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'
import { Bars } from '../components/svgs/Bars'

// modes
import { timingTypesModes } from '../config/modes'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {


    const [start, setstart] = useState(false)
    const [pauseActived, setPauseActived] = useState(false)
    const [reset, setReset] = useState(false)


    const navRef = useRef()

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

    const handleOpenModal = () => {
        setOpenModal(state => !state)
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

    const handleOpenNavigation = () => {
        navRef.current(true)

    }





    return (


        < modeContext.Provider value={{ timingMode, setTimingMode }}>


            {
                (openModal) &&
                <ModalSettings openModal={handleOpenModal} />

            }

            <div className={styles.mainContainer}>


                <span
                    onClick={handleOpenNavigation}
                    className={styles.barsIcon}>
                    <Bars />
                </span>

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


                    <Navigation openModal={handleOpenModal} navigationRef={navRef} />

                    <Input />


                </div>
            </div>






        </modeContext.Provider>






    )
}
