import React, { useContext, useRef } from 'react'
import { timingTypesModes } from '../../config/modes'
import { modeContext } from '../../context/mainContext'

import styles from '../../scss/components/pomodoro.module.scss'


export const PomodoroMode = () => {

    const { timingMode, setTimingMode } = useContext(modeContext)


    const refButtomPomodoro = useRef()
    const refButtomShortBreak = useRef()
    const refButtomLongBreak = useRef()



    const handleChangeTimingMode = ({ target }) => {
        setTimingMode(target.name)

    }





    return (
        <div className={styles.pomodoroModeContainer}>
            <button
                ref={refButtomPomodoro}
                onClick={handleChangeTimingMode}
                name={timingTypesModes.pomodoro}


                className={
                    (timingMode === timingTypesModes.pomodoro) ?
                        `${styles.pomodoroModeButton} ${styles.actived} ` :
                        styles.pomodoroModeButton}>

                Pomodoro

            </button>
            <button
                ref={refButtomShortBreak}
                onClick={handleChangeTimingMode}
                name={timingTypesModes.shortBreaking}

                className={
                    (timingMode === timingTypesModes.shortBreaking) ?
                        `${styles.pomodoroModeButton} ${styles.actived}`
                        : styles.pomodoroModeButton}>

                Short Break
            </button>
            <button
                ref={refButtomLongBreak}
                onClick={handleChangeTimingMode}
                name={timingTypesModes.longBreaking}

                className={
                    (timingMode === timingTypesModes.longBreaking) ?
                        `${styles.pomodoroModeButton} ${styles.actived}`
                        : styles.pomodoroModeButton}>

                Long Break
            </button>

        </div>
    )
}
