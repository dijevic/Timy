import React from 'react'
import { timingStateMode } from '../../config/modes'
import styles from '../../scss/components/pomodoro.module.scss'
import { StopSoundIcon } from '../svgs/StopSoundIcon'

export const StopButton = ({ stopTiming }) => {
    return (
        <button
            onClick={stopTiming}
            name={timingStateMode.unActived}
            className={styles.actionButton}>
            <StopSoundIcon />
        </button>
    )
}
