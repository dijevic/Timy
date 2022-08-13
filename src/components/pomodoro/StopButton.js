import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'
import { StopSoundIcon } from '../svgs/StopSoundIcon'

export const StopButton = ({ stopTiming }) => {
    return (
        <button
            onClick={stopTiming}
            className={styles.actionButton}>
            <StopSoundIcon />
        </button>
    )
}
