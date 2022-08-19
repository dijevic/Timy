import React from 'react'
// context

// components
import { PlayButton } from './PlayButton'
import { StopButton } from './StopButton'
import { PauseButton } from './PauseButton'

// styles
import styles from '../../scss/components/pomodoro.module.scss'

export const ActionButtons = ({ setstart, start, setPauseActived, pauseActived, setReset }) => {

    // todo atomizar funcion



    const handleStarTiming = () => {

        setstart(true)
        setPauseActived(false)


    }

    const handleStopTiming = () => {


        setstart(false)
        setPauseActived(false)
        setReset(true)
    }
    const handlePauseTiming = () => {

        setstart((state) => !state)
        setPauseActived(true)

    }





    return (
        <div
            className={styles.actionButtons}>




            {

                (start && !pauseActived) ?

                    <>
                        <PauseButton showStopButton={handlePauseTiming} />
                        <StopButton stopTiming={handleStopTiming} />
                    </> :
                    (!start && pauseActived) ?

                        <>
                            <PlayButton showStopButton={handleStarTiming} />
                            <StopButton stopTiming={handleStopTiming} />


                        </>

                        :
                        (!start && !pauseActived)
                        &&
                        <PlayButton showStopButton={handleStarTiming} />


            }




        </div>
    )
}
