import React from 'react'
import { AdjustmentIcon } from '../svgs/AdjustmentIcon'
import { ClockIcon } from '../svgs/ClockIcon'
import { HomeIcon } from '../svgs/HomeIcon'

import styles from '../../scss/components/pomodoro.module.scss'
import { Link } from 'react-router-dom'

export const Navigation = ({ setOpenModal }) => {


    const handleOpenModal = () => {

        setOpenModal(true)
    }

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
                    <span
                        onClick={handleOpenModal}
                        to="/settings">Settings</span>


                </li>
            </ul>
        </nav>
    )
}
