import React from 'react'

import styles from '../../scss/components/footer.module.scss'



export const Footer = () => {
    return (
        <footer className={styles.footer}>


            <p className={styles.footerText} >
                Made with love by
                <a href="https://github.com/dijevic">dijevic
                </a>
            </p>
        </footer>
    )
}
