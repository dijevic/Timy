import React from 'react'
import { PlayIcon } from '../svgs/PlayIcon'

import styles from '../../scss/components/pomodoro.module.scss'

export const PlayButton = () => {
    return (
        <span className={styles.PlayButton}>

            <PlayIcon />
        </span>
    )
}
