import React from 'react'
import styles from './../scss/test.module.scss'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <Link to="/pomodoro" className={styles.test} >Go to pomodoro</Link>
    )
}
