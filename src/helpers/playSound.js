import source from '../assets/mp3/BELLBIKE.mp3'

export const playSound = () => {

    const music = new Audio(source);
    music.play()
}