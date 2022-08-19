import React, { useRef, useEffect, useState } from 'react'
import { timingTypesModes } from '../../config/modes'


import styles from '../../scss/components/pomodoro.module.scss'
import { PomodoroMode } from './PomodoroMode'

export const Time = ({ start, seconds, minutes, handleTiming, pauseActived, setSeconds, setMinutes, setstart, setPauseActived }) => {


    let secondsIntervalRef = useRef()
    const seconsStart = useRef('00')
    const loadingRef = useRef()
    const [timingMode, setTimingMode] = useState(timingTypesModes.pomodoro)




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

        switch (timingMode) {
            case timingTypesModes.pomodoro:
                setSeconds(60)
                setMinutes(25)


                break;
            case timingTypesModes.shortBreaking:
                setSeconds(60)
                setMinutes(5)

                break;
            case timingTypesModes.longBreaking:
                setSeconds(60)
                setMinutes(15)
                break;

            default:
                break;
        }

    }, [timingMode, setMinutes, setSeconds])






    return (
        <div className={styles.clockContainer}>
            <PomodoroMode

                start={start}
                setstart={setstart}
                setTimingMode={setTimingMode}
                timingMode={timingMode}
                setPauseActived={setPauseActived}
            />


            <div className={styles.clock}>


                <span className={styles.clockTime}>
                    {minutes} :

                    {
                        (!start && pauseActived) ? seconds :
                            (!start && !pauseActived) ? seconsStart.current :
                                (seconds < 60 && seconds >= 10) ? seconds :
                                    (seconds < 10 && seconds > 0) ? `0${seconds}` :
                                        (seconds === 0 || seconds === 60) && seconsStart.current
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
