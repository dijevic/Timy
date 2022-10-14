import { setLocalStorageValue } from "./setLocalStorageValue"

export const getLocalStorageValue = (timingMode) => {


    try {
        const item = JSON.parse(localStorage.getItem(timingMode))


        if (!item) return setLocalStorageValue()



        return item
    } catch (e) {
        console.log({
            msg: 'well tried'
        })




    }
}
