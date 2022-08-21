import React from 'react'
import styles from '../../scss/components/pomodoro.module.scss'


export const ModalSettings = ({ openModal }) => {

    const handleCloseModal = () => {
        openModal()
    }



    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>

                <h2 className={styles.modalTitle}>Settings</h2>
                <p className={styles.SettingTypeName}>Time (minutes)</p>

                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>focuse time</h3>

                    <span className={styles.settingsOptionTime}>

                        <input className={styles.inputNumber} type="number" min="0" step="1" />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Short Break</h3>

                    <span className={styles.settingsOptionTime}>

                        <input className={styles.inputNumber} type="number" min="0" step="1" />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Long Break</h3>
                    <span className={styles.settingsOptionTime}>

                        <input className={styles.inputNumber} type="number" min="0" step="1" />
                    </span>

                </div>

                <div className={styles.ModalSettingsButtonsContainer}>
                    <button

                        className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonSave}`}>Save</button>
                    <button
                        onClick={handleCloseModal}
                        className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonClose}`}>Close</button>
                </div>
            </div>

        </div>
    )
}
