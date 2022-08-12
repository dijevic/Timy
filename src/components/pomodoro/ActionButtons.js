import React, { useState, useRef } from 'react'
import { PlayButton } from './PlayButton'
import { StopButton } from './StopButton'
import styles from '../../scss/components/pomodoro.module.scss'
import { useEffect } from 'react'

export const ActionButtons = ({ setstart, setSeconds, handleSeconds, startTiming, seconds }) => {

    let secondsIntervalRef = useRef()
    const [showStoptButton, setshowStoptButton] = useState(false)

    // todo atomizar funcion
    const handleStarTiming = () => {

        setshowStoptButton(!showStoptButton)
        setstart((state) => !state)

        if (showStoptButton) {
            setSeconds(60)

        }


    }

    // manejar el intervalo

    useEffect(() => {

        if (startTiming) {
            // limpio el intervalo para que funciones bien
            window.clearTimeout(secondsIntervalRef.current)

            secondsIntervalRef.current = setTimeout(() => {
                handleSeconds()

            }, 1000);



        } else {
            window.clearTimeout(secondsIntervalRef.current)

        }


    }, [startTiming, seconds])







    return (
        <div className={styles.actionButtons}>


            {

                (showStoptButton) ?
                    <StopButton showStopButton={handleStarTiming} /> :
                    <PlayButton showStopButton={handleStarTiming} />


            }


        </div>
    )
}
