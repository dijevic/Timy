import React, { useState } from 'react'
import validator from 'validator'

// hooks
import { useForm } from '../../hooks/useForm'
// types
import { timingTypesModes } from '../../config/modes'
// css
import styles from '../../scss/components/pomodoro.module.scss'


export const ModalSettings = ({ openModal, handleChangeSettings }) => {


    const initialState = {
        [timingTypesModes.pomodoro]: localStorage.getItem(timingTypesModes.pomodoro) || 25,
        [timingTypesModes.shortBreaking]: localStorage.getItem(timingTypesModes.shortBreaking) || 5,
        [timingTypesModes.longBreaking]: localStorage.getItem(timingTypesModes.longBreaking) || 15,

    }

    const [InputValues, handleInputChange] = useForm(initialState)

    const [uiError, setUiError] = useState(false)

    const { pomodoro, shortBreaking, longBreaking } = InputValues




    const handleCloseModal = () => {
        openModal()
        setUiError(false)



    }

    const handleSaveSettings = () => {



        if (!validator.isNumeric(pomodoro.trim()) || pomodoro > 60 || validator.isEmpty(pomodoro)) {
            setUiError(true)
            return
        }

        if (!validator.isNumeric(shortBreaking.trim()) || shortBreaking > 60 || validator.isEmpty(shortBreaking)) {
            setUiError(true)

            return

        }

        if (!validator.isNumeric(longBreaking.trim()) || longBreaking > 60 || validator.isEmpty(longBreaking)) {
            setUiError(true)

            return

        }
        setUiError(false)


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

                <p className={styles.settingTypeName}>Time (minutes)</p>

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

                <div className={styles.settingsRules}>

                    <ul >
                        <li className={(uiError) ? `${styles.settingsRule} ${styles.error}` : styles.settingsRule}>Only Number from 0 - 60 are allowed</li>
                        <li className={(uiError) ? `${styles.settingsRule} ${styles.error}` : styles.settingsRule}>Strings are not allowed</li>
                    </ul>
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
