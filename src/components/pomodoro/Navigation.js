import React, { useState } from 'react'
import { AdjustmentIcon } from '../svgs/AdjustmentIcon'
import { ClockIcon } from '../svgs/ClockIcon'
import { HomeIcon } from '../svgs/HomeIcon'

import styles from '../../scss/components/pomodoro.module.scss'
import { Link } from 'react-router-dom'
import { CloseIcon } from '../svgs/CloseIcon'

export const Navigation = ({ setOpenModal, navigationRef }) => {


    const [open, setOpen] = useState(false)


    const handleOpenModal = () => {

        setOpenModal(true)
    }

    navigationRef.current = setOpen

    const handleCloseNavigation = () => {
        setOpen(false)
    }

    return (
        <nav className={(open) ? `${styles.nav} ${styles.navOpen}` : `${styles.nav}`}>
            <ul>
                <li>

                    <Link
                        className={styles.navItem} to='/'>
                        <HomeIcon />
                        Home

                    </Link>

                </li>
                <li>
                    <Link
                        className={styles.navItem} to="/pomodoro">
                        <ClockIcon />

                        Pomodoro
                    </Link>


                </li>
                <li>
                    <span
                        className={styles.navItem}
                        onClick={handleOpenModal}
                        to="/settings">
                        <AdjustmentIcon />

                        Settings
                    </span>


                </li>
            </ul>





            <span
                onClick={handleCloseNavigation}
                className={styles.closeIcon}>
                <CloseIcon />
            </span>


            <h2 className={styles.appName}>Pomy</h2>
        </nav>
    )
}
