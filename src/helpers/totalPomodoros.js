export const totalPomodoros = (setpomodoroNumber) => {

    const pomodoros = sessionStorage.getItem('totalPomodoro')
    const plusPomodoro = JSON.parse(pomodoros) + 1

    sessionStorage.setItem('totalPomodoro', plusPomodoro)
    setpomodoroNumber(plusPomodoro)



}