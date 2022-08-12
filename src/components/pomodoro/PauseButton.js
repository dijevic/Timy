import React from 'react'

import styles from '../../scss/components/pomodoro.module.scss'
import { PauseIcon } from '../svgs/PauseIcon'

export const PauseButton = ({ showStopButton }) => {
    return (
        <div onClick={showStopButton}
            className={styles.actionButton}>

            <PauseIcon />
        </div>
    )
}
