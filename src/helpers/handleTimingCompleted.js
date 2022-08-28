import { timingTypesModes } from "../config/modes";

export const handleTimingCompleted = (timingMode, setTimingMode) => {


    switch (timingMode) {
        case timingTypesModes.shortBreaking:
            setTimingMode(timingTypesModes.pomodoro)


            break;
        case timingTypesModes.pomodoro:
            setTimingMode(timingTypesModes.shortBreaking)

            break;
        case timingTypesModes.longBreaking:
            setTimingMode(timingTypesModes.longBreaking)


            break;

        default:
            break;
    }


}
