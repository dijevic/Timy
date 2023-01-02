import React, { useState, useContext, useRef } from 'react'
import validator from 'validator'

// image

import image from '../../assets/shiba.png'

import { modeContext } from '../../context/mainContext'

// hooks
import { useForm } from '../../hooks/useForm'
// types
import { timingStateMode } from '../../config/modes'
import { timingTypesModes } from '../../config/modes'
// css
import styles from '../../scss/components/pomodoro.module.scss'


export const ModalSettings = ({ openModal }) => {

    const { setTimingState } = useContext(modeContext)
    const divRef = useRef()


    const initialState = {
        [timingTypesModes.pomodoro]: localStorage.getItem(timingTypesModes.pomodoro) || 25,
        [timingTypesModes.shortBreaking]: localStorage.getItem(timingTypesModes.shortBreaking) || 5,
        [timingTypesModes.longBreaking]: localStorage.getItem(timingTypesModes.longBreaking) || 15,

    }

    const [InputValues, handleInputChange] = useForm(initialState)

    const [uiError, setUiError] = useState(false)

    const { pomodoro, shortBreaking, longBreaking } = InputValues

    const [isClosing, setIsClosing] = useState(false)




    const handleCloseModal = () => {

        setIsClosing(true)


        setTimeout(() => {
            openModal()
            setUiError(false)
            setIsClosing(false)

        }, 400);

    }

    const handleCloseModalOutside = ({ target }) => {

        if (target === divRef.current) {
            handleCloseModal()
        }


    }








    const handleSaveSettings = (e) => {
        e.preventDefault()


        if (!validator.isNumeric(pomodoro.trim()) || pomodoro > 60 || pomodoro < 1 || validator.isEmpty(pomodoro)) {
            setUiError(true)
            setTimeout(() => {
                setUiError(false)

            }, 500);

            return
        }

        if (!validator.isNumeric(shortBreaking.trim()) || shortBreaking > 60 || shortBreaking < 1 || validator.isEmpty(shortBreaking)) {
            setUiError(true)
            setTimeout(() => {
                setUiError(false)

            }, 500);

            return

        }

        if (!validator.isNumeric(longBreaking.trim()) || longBreaking > 60 || longBreaking < 1 || validator.isEmpty(longBreaking)) {
            setUiError(true)
            setTimeout(() => {
                setUiError(false)

            }, 500);

            return

        }


        setUiError(false)
        setTimingState(timingStateMode.updating)


        localStorage.setItem(timingTypesModes.pomodoro, Math.floor(pomodoro))
        localStorage.setItem(timingTypesModes.shortBreaking, Math.floor(shortBreaking))
        localStorage.setItem(timingTypesModes.longBreaking, Math.floor(longBreaking))

        handleCloseModal()
    }

    const numberFormatHandler = ({target})=>{
       target.value = target.value.replaceAll(/[^0-9]*/gi , '')

    }





    return (
        <div
            onClick={handleCloseModalOutside}
            ref={divRef}
            className={styles.modal}>
            <div

            >

                <form
                    onSubmit={handleSaveSettings}

                    className={(isClosing) ? `${styles.modalContainer} ${styles.closeModal}` : styles.modalContainer}>

                    <img src={image} alt="astronaut" className={styles.image} />

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
                                max={60}
                                step="1"
                                value={pomodoro}
                                onChange={handleInputChange}
                                onInput={numberFormatHandler}

                            />

                        </span>
                    </div>
                    <div className={styles.settingsOption}>
                        <h3 className={styles.settingsOptionName}>Short Break</h3>

                        <span className={styles.settingsOptionTime}>

                            <input
                                name={timingTypesModes.shortBreaking}
                                className={styles.inputNumber}
                                type="text"
                                max={60}

                                min="1"
                                step="1"
                                value={shortBreaking}
                                onChange={handleInputChange}
                                onInput={numberFormatHandler}
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
                                max={60}

                                min="1"
                                step="1"
                                value={longBreaking}
                                onChange={handleInputChange}
                                onInput={numberFormatHandler}

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
                            type="submit"
                            className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonSave}`}>Save</button>
                        <button
                            onClick={handleCloseModal}
                            type="button"
                            className={`${styles.ModalSettingsButton} ${styles.ModalSettingsButtonClose}`}>Close</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
