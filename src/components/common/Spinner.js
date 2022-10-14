import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
import styles from '../../scss/components/common/spinner.module.scss'


export const Spinner = () => {
    return (
        <div className={styles.container}>
            <BarLoader color="#fff" />
            <p className={styles.loadingText}>LOADING</p>
        </div>
    )
}
