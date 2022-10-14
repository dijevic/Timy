import { timingTypesModes } from "../config/modes";
import { playSound } from "./playSound";
import { totalPomodoros } from "./totalPomodoros";

export const handleTimingCompleted = (timingMode, setTimingMode, setpomodoroNumber) => {
    playSound()


    switch (timingMode) {
        case timingTypesModes.shortBreaking:
            setTimingMode(timingTypesModes.pomodoro)


            break;
        case timingTypesModes.pomodoro:
            setTimingMode(timingTypesModes.shortBreaking)
            totalPomodoros(setpomodoroNumber)


            break;
        case timingTypesModes.longBreaking:
            setTimingMode(timingTypesModes.longBreaking)


            break;

        default:
            break;
    }



}
