import { timingStateMode } from "../config/modes";
import { handleTiming } from "./handleTiming";



export const handleTimingInterval = ({
    timingState,
    secondsIntervalRef,
    seconds,
    minutes,
    setTimingState,
    setMinutes,
    setSeconds,
    timingMode,
    setTimingMode,
    setpomodoroNumber
}) => {
    if (timingState === timingStateMode.started) {
        // cleaning the setTimeout to avoid ERRORS
        window.clearTimeout(secondsIntervalRef.current)

        secondsIntervalRef.current = setTimeout(() => {
            handleTiming(seconds, minutes, setTimingState, setMinutes, setSeconds, timingState, timingMode, setTimingMode, setpomodoroNumber)

        }, 1000);




    } else {

        window.clearTimeout(secondsIntervalRef.current)

    }
}