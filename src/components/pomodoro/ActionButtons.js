import React from 'react'
import { PlayButton } from './PlayButton'
import { StopButton } from './StopButton'
import styles from '../../scss/components/pomodoro.module.scss'

export const ActionButtons = () => {
    return (
        <div className={styles.actionButtons}>

            <PlayButton />

            {/* <StopButton /> */}
        </div>
    )
}
