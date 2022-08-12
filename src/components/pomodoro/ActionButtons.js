import React, { useState } from 'react'
import { PlayButton } from './PlayButton'
import { StopButton } from './StopButton'
import styles from '../../scss/components/pomodoro.module.scss'
import { PauseButton } from './PauseButton'

export const ActionButtons = ({ setstart, setSeconds, setMinutes, start }) => {

    const [showStoptButton, setshowStoptButton] = useState(false)

    // todo atomizar funcion
    const handleStarTiming = () => {

        setshowStoptButton(!showStoptButton)
        setstart((state) => !state)

        if (showStoptButton) {
            setSeconds(60)
            setMinutes(25)
        }


    }




    return (
        <div className={styles.actionButtons}>
            {
                (start) && <StopButton />
            }


            {

                (showStoptButton) ?
                    <PauseButton showStopButton={handleStarTiming} /> :
                    <PlayButton showStopButton={handleStarTiming} />


            }


        </div>
    )
}
