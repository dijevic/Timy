import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'

export const Time = () => {
    return (
        <div className={styles.clockContainer}>

            <div className={styles.clock}>
                <span className={styles.clockTime}> 05:24</span>

                <span className={styles.clockLoading}></span>
            </div>
        </div>
    )
}
