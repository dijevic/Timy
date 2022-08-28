import { timingTypesModes } from "../config/modes"

export const getLocalStorageValue = (timingMode) => {


    try {
        const item = JSON.parse(localStorage.getItem(timingMode))




        return item
    } catch (e) {
        console.log({
            msg: 'well tried'
        })

        switch (timingMode) {
            case timingTypesModes.pomodoro:
                localStorage.setItem(timingMode, JSON.stringify(25))



                break;
            case timingTypesModes.shortBreaking:
                localStorage.setItem(timingMode, JSON.stringify(5))



                break;
            case timingTypesModes.longBreaking:
                localStorage.setItem(timingMode, JSON.stringify(15))

                break;

            default:
                break;
        }


    }
}
