import React, { useRef, useEffect, useContext } from 'react'
import { timingTypesModes } from '../../config/modes'
import { modeContext } from '../../context/mainContext'


import styles from '../../scss/components/pomodoro.module.scss'

// types and modes
import { PomodoroMode } from './PomodoroMode'
import { timingStateMode } from '../../config/modes'


export const Time = ({ seconds, minutes, setSeconds, setMinutes, handleTiming }) => {


    const { timingMode, timingState, setTimingState } = useContext(modeContext)

    let secondsIntervalRef = useRef()
    const loadingRef = useRef()
    const loadingRef2 = useRef()
    const secondsStart = '00'





    useEffect(() => {

        if (timingState === timingStateMode.started) {
            // cleaning the setTimeout to avoid ERRORS
            window.clearTimeout(secondsIntervalRef.current)

            secondsIntervalRef.current = setTimeout(() => {
                handleTiming()

            }, 1000);




        } else {

            window.clearTimeout(secondsIntervalRef.current)

        }


    }, [timingState, seconds, handleTiming])

    useEffect(() => {

        if (timingState === timingStateMode.started) {

            loadingRef.current.style.animationDuration = '1s'


        } else {

            loadingRef.current.style.animationDuration = ''





        }


    }, [timingState])



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

            if (timingState === timingStateMode.unActived) {
                setSeconds(60)
                setMinutes(minutes)
            }





        }


        handleModes(timingMode)


    }, [timingMode, timingState, setMinutes, setSeconds, setTimingState])









    return (
        <div className={styles.clockContainer}>
            <PomodoroMode />

            <div
                ref={loadingRef}

                className={styles.clock}>


                <span className={styles.clockTime}>
                    {minutes} :

                    {
                        (timingState === timingStateMode.paused) ? seconds :
                            (seconds < 60 && seconds >= 10) ? seconds :
                                (seconds < 10 && seconds > 0) ? `0${seconds}` :
                                    (seconds === 0 || seconds === 60) && secondsStart
                    }



                </span>




                <span
                    ref={loadingRef2}
                    className={styles.clockLoading}>

                </span>
            </div>


        </div>
    )
}
