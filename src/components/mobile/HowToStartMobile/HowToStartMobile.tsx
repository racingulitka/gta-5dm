import React from 'react'
import styles from './HowToStartMobile.module.scss'
import { cardArr } from '../../HowToStart/HowToStart.config'
import HTPCard from './HTPCard/HTPCardMobile'
import logo from '../../HowToStart/assets/logo.png'
import Image from 'next/image'

const HowToStartMobile = () => {
    return (
        <div id='howToStart' className={styles.wrapper} itemScope itemType="http://schema.org/WebPage">
            <div className={styles.header} itemScope itemType="http://schema.org/WebPageElement">
                <h2 className={styles.title} itemScope itemType="http://schema.org/Text">Как начать играть</h2>
                <div className={styles.pseudoButton} itemScope itemType="http://schema.org/Text">Выполните всего 3 шага</div>
            </div>
            <div className={styles.description} itemScope itemType="http://schema.org/Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <Image src={logo} alt='logo' className={styles.logo} itemScope itemType="http://schema.org/ImageObject"/>
            <div className={styles.cardWrapper} itemScope itemType="http://schema.org/ItemList">
                {
                    cardArr.map(item => {
                        return (
                            <HTPCard
                                key={item.id}
                                image={item.cardImage}
                                step={item.id}
                                title={item.cardTitle}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HowToStartMobile