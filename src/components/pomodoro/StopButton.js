import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'
import { StopSoundIcon } from '../svgs/StopSoundIcon'

export const StopButton = ({ showStopButton }) => {
    return (
        <span onClick={showStopButton} className={styles.actionButton}>
            <StopSoundIcon />
        </span>
    )
}
