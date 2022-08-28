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
import { timingTypesModes, timingStateMode } from '../config/modes'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {




    const [timingState, setTimingState] = useState(timingStateMode.unActived)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)



    const navRef = useRef()

    const [timingMode, setTimingMode] = useState(timingTypesModes.pomodoro)



    const [openModal, setOpenModal] = useState(false)



    const handleTimingCompleted = () => {


        switch (timingMode) {
            case timingTypesModes.shortBreaking:
                setTimingMode(timingTypesModes.pomodoro)


                break;
            case timingTypesModes.pomodoro:
                setTimingMode(timingTypesModes.shortBreaking)

                break;
            case timingTypesModes.longBreaking:
                setTimingMode(timingTypesModes.longBreaking)


                break;

            default:
                break;
        }


    }






    // discount minutes or seconds
    const handleTiming = () => {


        // verify if the pomodoro is completed

        if (seconds === 0 && minutes === 0) {
            handleTimingCompleted()
            setTimingState(timingStateMode.unActived)
            return
        }

        // discount the first minute when starting the timing


        if (seconds === 60 && timingState === timingStateMode.started) {
            setMinutes((state) => state - 1)

        }

        // handle and reset the seconds whend it turns zero but the pomodoro isn't completed

        if (seconds === 0) {
            setSeconds(60)
            setSeconds((sec) => sec - 1)
            setMinutes((state) => state - 1)


        } else {

            // discount seconds
            setSeconds((sec) => sec - 1)

        }


    }

    const handleOpenModal = () => {
        setOpenModal(state => !state)
    }

    const handleOpenNavigation = () => {
        navRef.current(true)

    }





    return (


        < modeContext.Provider value={{ timingMode, setTimingMode, timingState, setTimingState }}>


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
                        seconds={seconds}
                        minutes={minutes}
                        setSeconds={setSeconds}
                        setMinutes={setMinutes}
                        handleTiming={handleTiming}
                    />

                    <ActionButtons />


                    <Navigation
                        openModal={handleOpenModal}
                        navigationRef={navRef} />

                    <Input />


                </div>
            </div>






        </modeContext.Provider>






    )
}
