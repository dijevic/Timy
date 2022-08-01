import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Pencil } from '../svgs/Pencil'


import styles from '../../scss/components/pomodoro.module.scss'

export const Input = () => {

    const initialState = {
        task: ''
    }


    const [stateValues, handleInputChange] = useForm(initialState)

    const { task } = stateValues


    return (
        <div className={styles.inputContainer}>

            <input
                placeholder="Task: white and Article"
                name="task"
                value={task}
                onChange={handleInputChange}
                autoComplete="off"
                maxLength={40}

            />

            <Pencil />


        </div>
    )
}
