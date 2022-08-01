import React from 'react'
import { AdjustmentIcon } from '../svgs/AdjustmentIcon'
import { ClockIcon } from '../svgs/ClockIcon'
import { HomeIcon } from '../svgs/HomeIcon'

import styles from '../../scss/components/pomodoro.module.scss'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <HomeIcon />
                    <Link to='/'>Home</Link>

                </li>
                <li>
                    <ClockIcon />
                    <Link to="/pomodoro">Pomodoro</Link>


                </li>
                <li>
                    <AdjustmentIcon />
                    <Link to="/">Settings</Link>


                </li>
            </ul>
        </nav>
    )
}
