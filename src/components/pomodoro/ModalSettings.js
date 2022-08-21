import React from 'react'
import { timingTypesModes } from '../../config/modes'
import { useForm } from '../../hooks/useForm'
import styles from '../../scss/components/pomodoro.module.scss'


export const ModalSettings = ({ openModal, handleChangeSettings }) => {


    const initialState = {
        [timingTypesModes.pomodoro]: localStorage.getItem(timingTypesModes.pomodoro) || 25,
        [timingTypesModes.shortBreaking]: localStorage.getItem(timingTypesModes.shortBreaking) || 5,
        [timingTypesModes.longBreaking]: localStorage.getItem(timingTypesModes.longBreaking) || 15,

    }

    const [InputValues, handleInputChange] = useForm(initialState)

    const { pomodoro, shortBreaking, longBreaking } = InputValues




    const handleCloseModal = () => {
        openModal()
    }

    const handleSaveSettings = () => {

        localStorage.setItem(timingTypesModes.pomodoro, pomodoro)
        localStorage.setItem(timingTypesModes.shortBreaking, shortBreaking)
        localStorage.setItem(timingTypesModes.longBreaking, longBreaking)

        handleCloseModal()
        handleChangeSettings()
    }



    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>

                <h2 className={styles.modalTitle}>Settings</h2>
                <p className={styles.SettingTypeName}>Time (minutes)</p>

                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Focuse time</h3>

                    <span className={styles.settingsOptionTime}>

                        <input
                            name={timingTypesModes.pomodoro}
                            className={styles.inputNumber}
                            type="number"
                            min="1"
                            step="1"
                            value={pomodoro}
                            onChange={handleInputChange}
                        />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Short Break</h3>

                    <span className={styles.settingsOptionTime}>

                        <input
                            name={timingTypesModes.shortBreaking}
                            className={styles.inputNumber}
                            type="number"
                            min="1"
                            step="1"
                            value={shortBreaking}
                            onChange={handleInputChange}
                        />

                    </span>
                </div>
                <div className={styles.settingsOption}>
                    <h3 className={styles.settingsOptionName}>Long Break</h3>
                    <span className={styles.settingsOptionTime}>

                        <input
                            name={timingTypesModes.longBreaking}
                            className={styles.inputNumber}
                            type="number"
                            min="1"
                            step="1"
                            value={longBreaking}
                            onChange={handleInputChange}
                        />
                    </span>

                </div>

                <div className={styles.ModalSettingsButtonsContainer}>
                    <button
                        onClick={handleSaveSettings}
                        className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonSave}`}>Save</button>
                    <button
                        onClick={handleCloseModal}
                        className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonClose}`}>Close</button>
                </div>
            </div>

        </div>
    )
}
