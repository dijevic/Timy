import React from 'react'
import { PlayIcon } from '../svgs/PlayIcon'

import styles from '../../scss/components/pomodoro.module.scss'

export const PlayButton = ({ showStopButton }) => {
    return (
        <button onClick={showStopButton}
            className={styles.actionButton}>

            <PlayIcon />
        </button>
    )
}
