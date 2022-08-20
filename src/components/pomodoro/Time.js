import React, { useRef, useEffect, useContext } from 'react'
import { timingTypesModes } from '../../config/modes'
import { modeContext } from '../../context/mainContext'


import styles from '../../scss/components/pomodoro.module.scss'
import { PomodoroMode } from './PomodoroMode'

export const Time = ({
    start,
    seconds,
    minutes,
    pauseActived,
    setSeconds,
    setMinutes,
    setstart,
    setPauseActived,
    handleTiming,
    reset,
    setReset
}) => {


    const { timingMode } = useContext(modeContext)

    let secondsIntervalRef = useRef()
    const secondsStart = useRef('00')
    const loadingRef = useRef()





    useEffect(() => {

        if (start) {
            // cleaning the setTimeout to avoid ERRORS
            window.clearTimeout(secondsIntervalRef.current)

            secondsIntervalRef.current = setTimeout(() => {
                handleTiming()

            }, 1000);




        } else {

            window.clearTimeout(secondsIntervalRef.current)

        }


    }, [start, seconds, handleTiming])













    useEffect(() => {

        const handleModes = (timingMode) => {


            let minutes = ''

            switch (timingMode) {
                case timingTypesModes.pomodoro:
                    minutes = localStorage.getItem(timingMode) || 25


                    break;
                case timingTypesModes.shortBreaking:
                    minutes = localStorage.getItem(timingMode) || 5

                    break;
                case timingTypesModes.longBreaking:
                    minutes = localStorage.getItem(timingMode) || 15



                    break;

                default:
                    break;
            }



            setSeconds(60)
            setMinutes(minutes)
            setReset(false)
            setstart(false)
            setPauseActived(false)


        }


        handleModes(timingMode)

    }, [timingMode, reset, setMinutes, setReset, setSeconds])






    return (
        <div className={styles.clockContainer}>
            <PomodoroMode />

            <div className={styles.clock}>


                <span className={styles.clockTime}>
                    {minutes} :

                    {
                        (!start && pauseActived) ? seconds :
                            (!start && pauseActived) ? secondsStart.current :
                                (seconds < 60 && seconds >= 10) ? seconds :
                                    (seconds < 10 && seconds > 0) ? `0${seconds}` :
                                        (seconds === 0 || seconds === 60) && secondsStart.current
                    }



                </span>




                <span
                    ref={loadingRef}
                    className={styles.clockLoading}>

                </span>
            </div>


        </div>
    )
}
