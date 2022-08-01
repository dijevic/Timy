import React from 'react'
import { ActionButtons } from '../components/pomodoro/ActionButtons'
import { Input } from '../components/pomodoro/Input'
import { PomodoroTitle } from '../components/pomodoro/PomodoroTitle'
import { Time } from '../components/pomodoro/Time'
import styles from '../scss/components/pomodoro.module.scss'

export const Pomy = () => {
    return (
        <div className={styles.mainContainer}>

            <div>
                <PomodoroTitle />

                <Input />

                <Time />

                <ActionButtons />
            </div>
        </div>




    )
}
