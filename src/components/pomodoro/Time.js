import React, { useRef, useEffect, useContext } from 'react'
import { modeContext } from '../../context/mainContext'


// helpers
import { handleModes } from '../../helpers/handleModesHelper'


// types and modes
import { PomodoroMode } from './PomodoroMode'
import { timingStateMode } from '../../config/modes'
// styles
import styles from '../../scss/components/pomodoro.module.scss'
import { handleTimingLoadingAnimation } from '../../helpers/handleTimingAnimation'
import { handleTimingInterval } from '../../helpers/handleTimingInterval'

export const Time = ({ seconds, minutes, setSeconds, setMinutes }) => {


    const { timingMode, timingState, setTimingState, setTimingMode } = useContext(modeContext)

    let secondsIntervalRef = useRef()
    const loadingRef = useRef()
    const loadingRef2 = useRef()
    const secondsStart = '00'




    useEffect(() => {

        const handletimingArgs = {
            timingState,
            secondsIntervalRef,
            seconds,
            minutes,
            setTimingState,
            setMinutes,
            setSeconds,
            timingMode,
            setTimingMode
        }

        handleTimingInterval(handletimingArgs)


    }, [timingState, seconds, minutes, setMinutes, setSeconds, setTimingState, setTimingMode, timingMode])

    useEffect(() => {

        handleTimingLoadingAnimation(timingState, loadingRef)


    }, [timingState])



    useEffect(() => {


        handleModes(timingMode, timingState, setSeconds, setMinutes)


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
                        (timingState === timingStateMode.paused && seconds !== 60) ? seconds :
                            (timingState === timingStateMode.paused && seconds === 60) ? secondsStart :
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
