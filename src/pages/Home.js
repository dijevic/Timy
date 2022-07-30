import React from 'react'

import { Footer } from '../components/footer/Footer'
import { MainButtons } from '../components/MainButtons'

import styles from '../scss/components/home.module.scss'
import shibaImg from '../assets/shiba.png';
import img from '../assets/zyro-image.png';
import moonImg from '../assets/moon.png';

export const Home = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Timy</h1>
                    <p className={styles.text}>Plan your Work and stay productive</p>

                    <MainButtons />
                </div>


            </main>

            <div className={styles.imageContainer}>
                <img className={styles.imageHome} src={img} alt="astronaut logo" />
                <img className={`${styles.imageHome} ${styles.moon}`} src={moonImg} alt="moon image" />
                <img className={styles.imageHome} src={shibaImg} alt="astronaut logo" />
            </div>

            <Footer />
        </>


    )
}
