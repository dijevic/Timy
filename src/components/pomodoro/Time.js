import React, { useRef } from 'react'

import styles from '../../scss/components/pomodoro.module.scss'

export const Time = ({ start, seconds, minutes }) => {


    const seconsStart = useRef('00')
    const loadingRef = useRef()




    return (
        <div className={styles.clockContainer}>

            <div className={styles.clock}>
                <span className={styles.clockTime}>
                    {minutes} :

                    {
                        (!start) ? seconsStart.current :
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
