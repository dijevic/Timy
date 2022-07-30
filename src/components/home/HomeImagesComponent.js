import React from 'react'
import styles from '../../scss/components/home.module.scss'
import shibaImg from '../../assets/shiba.png';
import img from '../../assets/zyro-image.png';
import moonImg from '../../assets/moon.png';

export const HomeImagesComponent = () => {
    return (
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
    )
}
