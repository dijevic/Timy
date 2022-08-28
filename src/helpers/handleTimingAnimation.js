import { timingStateMode } from "../config/modes"


export const handleTimingLoadingAnimation = (timingState, loadingRef) => {

    if (timingState === timingStateMode.started) {

        loadingRef.current.style.animationDuration = '1s'


    } else {

        loadingRef.current.style.animationDuration = ''


    }
}