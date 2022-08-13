import React, { useRef, useEffect } from 'react'

import styles from '../../scss/components/pomodoro.module.scss'

export const Time = ({ start, seconds, minutes, handleSeconds, pauseActived }) => {


    let secondsIntervalRef = useRef()
    const seconsStart = useRef('00')
    const loadingRef = useRef()




    useEffect(() => {

        if (start) {
            // cleaning the setTimeout to avoid ERRORS
            window.clearTimeout(secondsIntervalRef.current)

            secondsIntervalRef.current = setTimeout(() => {
                handleSeconds()

            }, 1000);




        } else {

            window.clearTimeout(secondsIntervalRef.current)

        }


    }, [start, seconds, handleSeconds])



    // useEffect(() => {
    //     loadingRef.current.style.animationDuration = `${1}s`
    // }, [minutes])





    return (
        <div className={styles.clockContainer}>

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
