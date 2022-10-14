import { timingStateMode } from "../config/modes"
import { handleTimingCompleted } from "./handleTimingCompleted"

// discount minutes or seconds
export const handleTiming = (seconds, minutes, setTimingState, setMinutes, setSeconds, timingState, timingMode, setTimingMode, setpomodoroNumber) => {

    // verify if the pomodoro is completed

    if (seconds === 0 && minutes === 0) {
        handleTimingCompleted(timingMode, setTimingMode, setpomodoroNumber)
        setTimingState(timingStateMode.unActived)
        return
    }

    // discount the first minute when starting the timing


    if (seconds === 60 && timingState === timingStateMode.started) {
        setMinutes((state) => state - 1)

    }

    // handle and reset the seconds whend it turns zero but the pomodoro isn't completed

    if (seconds === 0) {
        setSeconds(60)
        setSeconds((sec) => sec - 1)
        setMinutes((state) => state - 1)


    } else {

        // discount seconds
        setSeconds((sec) => sec - 1)

    }


}