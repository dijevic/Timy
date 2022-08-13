import React from 'react'

import styles from '../../scss/components/pomodoro.module.scss'
import { PauseIcon } from '../svgs/PauseIcon'

export const PauseButton = ({ showStopButton }) => {
    return (
        <button onClick={showStopButton}
            className={styles.actionButton}>

            <PauseIcon />
        </button>
    )
}
