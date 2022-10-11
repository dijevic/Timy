import React, { useRef, useState } from 'react'

// context
import { modeContext } from '../context/mainContext'



// components
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { ModalSettings } from '../components/pomodoro/ModalSettings'
import { Navigation } from '../components/pomodoro/Navigation'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'
import { Bars } from '../components/svgs/Bars'

// modes
import { timingTypesModes, timingStateMode } from '../config/modes'

// styles
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {




    const navRef = useRef()
    const [timingState, setTimingState] = useState(timingStateMode.unActived)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [timingMode, setTimingMode] = useState(timingTypesModes.pomodoro)


    const [openModal, setOpenModal] = useState(false)


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

                <>
                    <PomodoroTitle />


                    <Time
                        seconds={seconds}
                        minutes={minutes}
                        setSeconds={setSeconds}
                        setMinutes={setMinutes}
                    />

                    <ActionButtons />


                    <Navigation
                        openModal={handleOpenModal}
                        navigationRef={navRef} />


                    <p>Total Pomodoros : </p>




                </>
            </div>






        </modeContext.Provider>






    )
}
