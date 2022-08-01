import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../scss/components/mainButtons.module.scss'

export const MainButtons = () => {
    return (
        <div className={styles.container}>
            <p className={styles.currentTime}>12:00 pm New York !</p>

            <div className={styles.buttons}>
                <Link className={`${styles.mainLink} ${styles.link1}`} to="/pomodoro" >Pomodoro</Link>
                <Link className={`${styles.mainLink} ${styles.link2}`} to="/cronometro" >Cronometro</Link>
                <Link className={`${styles.mainLink} ${styles.link3}`} to="/temporizador" >Temporizador</Link>
            </div>
        </div>
    )
}
