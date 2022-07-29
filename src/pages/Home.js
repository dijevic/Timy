import React from 'react'

import { Footer } from '../components/footer/Footer'
import { MainButtons } from '../components/MainButtons'

import styles from '../scss/components/home.module.scss'

export const Home = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Timy</h1>
                    <p className={styles.text}>Plan your Work and stay productive</p>

                    <MainButtons />
                </div>


            </main>

            <Footer />
        </>


    )
}
