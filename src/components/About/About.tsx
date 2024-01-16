import React from 'react'
import styles from './About.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import baseballImage from './assets/baseballImage.png'
import akImage from './assets/akImage.png'
import gunImage from './assets/gunImage.png'
import crossImage from './assets/crossImage.svg'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <Image src={logo} alt='logo' className={styles.logo} />
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={akImage} alt='akImage' className={styles.akImage} />
            <Image src={gunImage} alt='gunImage' className={styles.gunImage} />
            <Image src={crossImage} alt='crossImage1' className={styles.crossImage1} />
            <Image src={crossImage} alt='crossImage2' className={styles.crossImage2} />
            <h2 className={styles.title}>О проекте</h2>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
        </div>
    )
}

export default About