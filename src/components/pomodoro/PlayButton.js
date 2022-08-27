import React from 'react'
import { PlayIcon } from '../svgs/PlayIcon'

import styles from '../../scss/components/pomodoro.module.scss'
import { timingStateMode } from '../../config/modes'

export const PlayButton = ({ showStopButton }) => {
    return (
        <button
            name={timingStateMode.started}
            onClick={showStopButton}
            className={styles.actionButton}>

            <PlayIcon />
        </button>
    )
}
