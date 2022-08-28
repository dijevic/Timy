import React, { useContext } from 'react'
// context

// components
import { PlayButton } from './PlayButton'
import { StopButton } from './StopButton'
import { PauseButton } from './PauseButton'

// styles
import styles from '../../scss/components/pomodoro.module.scss'
import { modeContext } from '../../context/mainContext'
import { timingStateMode } from '../../config/modes'

export const ActionButtons = () => {

    // todo atomizar funcion

    const { setTimingState, timingState } = useContext(modeContext)

    const handleStarTiming = () => {


        setTimingState(timingStateMode.started)


    }

    const handleStopTiming = () => {


        setTimingState(timingStateMode.unActived)

    }
    const handlePauseTiming = () => {

        setTimingState(timingStateMode.paused)


    }







    return (
        <div
            className={styles.actionButtons}>




            {

                (timingState === timingStateMode.started) ?

                    <>
                        <PauseButton showStopButton={handlePauseTiming} />
                        <StopButton stopTiming={handleStopTiming} />
                    </> :
                    (timingState === timingStateMode.paused) ?

                        <>
                            <PlayButton showStopButton={handleStarTiming} />
                            <StopButton stopTiming={handleStopTiming} />


                        </>

                        :
                        (timingState === timingStateMode.unActived || timingState === timingStateMode.updating)
                        &&
                        <PlayButton showStopButton={handleStarTiming} />




            }






        </div>
    )
}
