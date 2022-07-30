import React from 'react'

import { Footer } from '../components/footer/Footer'
import { MainButtons } from '../components/MainButtons'

import styles from '../scss/components/home.module.scss'

import { HomeTitle } from '../components/home/HomeTitle';
import { HomeImagesComponent } from '../components/home/HomeImagesComponent';

export const Home = () => {



    return (

        <main >
            <div className={styles.mainContainer}>

                <HomeTitle />
                <MainButtons />


            </div>

            <HomeImagesComponent />

            <Footer />


        </main>





    )
}
