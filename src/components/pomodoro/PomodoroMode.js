import React, { useRef } from 'react'
import { timingTypesModes } from '../../config/modes'

import styles from '../../scss/components/pomodoro.module.scss'


export const PomodoroMode = ({ setTimingMode, timingMode, start, setstart, setPauseActived }) => {

    const refButtomPomodoro = useRef()
    const refButtomShortBreak = useRef()
    const refButtomLongBreak = useRef()




    const handlePomodoroMode = () => {

        setTimingMode(timingTypesModes.pomodoro)
        setPauseActived(false)
        if (start) {
            setstart(false)
        }

    }

    const handleShortBreakMode = () => {

        setTimingMode(timingTypesModes.shortBreaking)
        setPauseActived(false)
        if (start) {
            setstart(false)
        }


    }

    const handleLongBreakMode = () => {

        setTimingMode(timingTypesModes.longBreaking)
        setPauseActived(false)
        if (start) {
            setstart(false)
        }


    }


    return (
        <div className={styles.pomodoroModeContainer}>
            <button
                ref={refButtomPomodoro}
                onClick={handlePomodoroMode}
                className={(timingMode === timingTypesModes.pomodoro) ?
                    `${styles.pomodoroModeButton} ${styles.actived} ` :
                    styles.pomodoroModeButton}>

                Pomodoro

            </button>
            <button
                ref={refButtomShortBreak}
                onClick={handleShortBreakMode}
                className={(timingMode === timingTypesModes.shortBreaking) ?
                    `${styles.pomodoroModeButton} ${styles.actived}`
                    : styles.pomodoroModeButton}>

                Short Break
            </button>
            <button
                ref={refButtomLongBreak}
                onClick={handleLongBreakMode}
                className={(timingMode === timingTypesModes.longBreaking) ?
                    `${styles.pomodoroModeButton} ${styles.actived}`
                    : styles.pomodoroModeButton}>

                Long Break
            </button>

        </div>
    )
}
