import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [stateValues, setstateValues] = useState(initialState)


    const resetState = () => {
        setstateValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setstateValues({
            ...stateValues,
            [target.name]: target.value

        })




    }
    return [stateValues, handleInputChange, resetState]



}