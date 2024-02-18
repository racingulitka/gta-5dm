import React from 'react'
import styles from './About.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import baseballImage from './assets/baseballImage.png'
import akImage from './assets/akImage.png'
import gunImage from './assets/gunImage.png'
import crossImage from './assets/crossImage.svg'
import mobileBaseballImage from './assets/mobileBaseballImage.png'
import ak2Image from './assets/ak2Image.png'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <Image src={logo} alt='logo' className={styles.logo} />
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={mobileBaseballImage} alt='mobileBaseballImage' className={styles.mobileBaseballImage} />
            <Image src={akImage} alt='akImage' className={styles.akImage} />
            <Image src={gunImage} alt='gunImage' className={styles.gunImage} />
            <Image src={crossImage} alt='crossImage1' className={styles.crossImage1} />
            <Image src={crossImage} alt='crossImage2' className={styles.crossImage2} />
            <Image src={ak2Image} alt='ak2Image' className={styles.ak2Image} />
            <h2 className={styles.title}>О проекте</h2>
            <div className={styles.description}>
                <p>Проект GTA5DM — это захватывающий сервер на базе, основанный на популярной игры GTA 5. Наш проект находится на на платформе RAGE MP. На ДМ сервере ты сможешь испытать настоящий экшен перестрелок банд гетто.</p>
                <p>На GTA5DM, каждый игрок имеет шанс проявить свое мастерство в стрельбе и тактическом мышлении. Независимо от того, являетесь ли вы опытным гетто-тащером или новичком, вас ждут разнообразные режимы игры, Ranked и Ghetto Gangwars, турниры и многое другое!</p>
            </div>
        </div>
    )
}

export default About