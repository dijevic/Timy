import React from 'react'
import { Input } from '../components/pomodoro/Input'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {
    return (
        <div className={styles.mainContainer}>

            <PomodoroTitle />

            <Input />

            <Time />
        </div>




    )
}
