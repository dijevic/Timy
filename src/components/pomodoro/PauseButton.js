import React from 'react'
import { timingStateMode } from '../../config/modes'

import styles from '../../scss/components/pomodoro.module.scss'
import { PauseIcon } from '../svgs/PauseIcon'


export const PauseButton = ({ showStopButton }) => {
    return (
        <button
            onClick={showStopButton}
            name={timingStateMode.paused}
            className={styles.actionButton}>

            <PauseIcon />
        </button>
    )
}
