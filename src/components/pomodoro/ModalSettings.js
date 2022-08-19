import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'


export const ModalSettings = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>

                <h2 className={styles.modalTitle}>Settings</h2>

                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>focuse time</h3>

                    <span className={styles.settingsOptionTime}>

                        <input type="number" min="0" step="1" />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Shor Break</h3>

                    <span className={styles.settingsOptionTime}>

                        <input type="number" min="0" step="1" />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Long Break</h3>
                    <span className={styles.settingsOptionTime}>

                        <input type="number" min="0" step="1" />
                    </span>

                </div>
            </div>

        </div>
    )
}
