export const setTotalPomodoros = () => {

    const value = sessionStorage.getItem('totalPomodoro')

    if (!value) {
        sessionStorage.setItem('totalPomodoro', 0)
        return 0

    }

    return JSON.parse(value)



}