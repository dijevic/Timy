import React from 'react'

import { Footer } from '../components/footer/Footer'
import { MainButtons } from '../components/MainButtons'

import styles from '../scss/components/home.module.scss'
import shibaImg from '../assets/shiba.png';
import img from '../assets/zyro-image.png';
import moonImg from '../assets/moon.png';
import { TextComponent } from '../components/home/TextComponent';

export const Home = () => {



    return (

        <main >
            <div className={styles.mainContainer}>

                <TextComponent />
                <MainButtons />


            </div>

            <div className={styles.imageContainer}>

                <img className={styles.imageHome}
                    src={img}
                    alt="astronaut" />
                <img className={`${styles.imageHome} ${styles.moon}`}
                    src={moonImg}
                    alt="moon"

                />
                <img className={`${styles.imageHome} ${styles.astronaut1}`}
                    src={shibaImg}
                    alt="astronaut" />
            </div>

            <Footer />


        </main>





    )
}
