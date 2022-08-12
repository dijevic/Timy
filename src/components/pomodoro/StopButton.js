import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'
import { StopSoundIcon } from '../svgs/StopSoundIcon'

export const StopButton = () => {
    return (
        <span className={styles.actionButton}>
            <StopSoundIcon />
        </span>
    )
}
