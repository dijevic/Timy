import { timingStateMode, timingTypesModes } from "../config/modes";
import { getLocalStorageValue } from "./getlocalStorageValue";

export const handleModes = (timingMode, timingState, setSeconds, setMinutes) => {


    let minutes = ''
    const localStorageValue = getLocalStorageValue(timingMode)


    switch (timingMode) {

        case timingTypesModes.pomodoro:

            minutes = Math.floor(localStorageValue) || 25


            break;
        case timingTypesModes.shortBreaking:


            minutes = Math.floor(localStorageValue) || 5


            break;
        case timingTypesModes.longBreaking:

            minutes = Math.floor(localStorageValue) || 15





            break;

        default:
            break;
    }

    if (timingState === timingStateMode.unActived) {
        setSeconds(60)
        setMinutes(minutes)
    }





}
