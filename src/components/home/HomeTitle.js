import React from 'react'
import styles from '../../scss/components/home.module.scss'

export const HomeTitle = () => {
    return (
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Timy</h1>
            <p className={styles.text}>Plan your Work and stay productive</p>
        </div>
    )
}
