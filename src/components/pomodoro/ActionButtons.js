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


    const { setTimingState, timingState } = useContext(modeContext)

    const handleActions = ({ target }) => {

        if (!target.name) {
            let refParent = target.parentNode

            setTimingState(refParent.name)

        } else {
            setTimingState(target.name)

        }
    }





    return (
        <div
            className={styles.actionButtons}>

            {

                (timingState === timingStateMode.started) ?

                    <>
                        <PauseButton showStopButton={handleActions} />
                        <StopButton stopTiming={handleActions} />
                    </> :
                    (timingState === timingStateMode.paused) ?

                        <>
                            <PlayButton showStopButton={handleActions} />
                            <StopButton stopTiming={handleActions} />


                        </>

                        :
                        (timingState === timingStateMode.unActived || timingState === timingStateMode.updating)
                        &&
                        <PlayButton showStopButton={handleActions} />




            }






        </div>
    )
}
