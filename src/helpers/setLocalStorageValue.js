import { timingTypesModes } from "../config/modes"

export const setLocalStorageValue = () => {

    let totalSetItem = 0

    if (!localStorage.getItem(timingTypesModes.pomodoro)) {
        localStorage.setItem(timingTypesModes.pomodoro, JSON.stringify(25))
        totalSetItem++


    }
    if (!localStorage.getItem(timingTypesModes.shortBreaking)) {
        localStorage.setItem(timingTypesModes.shortBreaking, JSON.stringify(5))
        totalSetItem++


    }
    if (!localStorage.getItem(timingTypesModes.shortBreaking)) {
        localStorage.setItem(timingTypesModes.longBreaking, JSON.stringify(15))
        totalSetItem++


    }
    if (totalSetItem === 3) {
        localStorage.setItem(timingTypesModes.pomodoro, JSON.stringify(25))
        localStorage.setItem(timingTypesModes.shortBreaking, JSON.stringify(5))
        localStorage.setItem(timingTypesModes.longBreaking, JSON.stringify(15))

    }



}