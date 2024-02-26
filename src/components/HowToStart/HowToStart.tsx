import React from 'react'
import styles from './HowToStart.module.scss'
import { cardArr } from './HowToStart.config'
import HTPCard from './HTPCard/HTPCard'
import logo from './assets/logo.png'
import Image from 'next/image'

const HowToStart = () => {
    return (
        <div id='howToStart' className={styles.wrapper} itemScope itemType="http://schema.org/HowTo">
            <Image src={logo} alt='logo' className={styles.logo} itemScope itemType="http://schema.org/ImageObject"/>
            <div className={styles.header} itemScope itemType="http://schema.org/WPHeader">
                <h2 className={styles.title} itemProp="headline">Как начать играть</h2>
                <div className={styles.pseudoButton} itemProp="interactionStatistic">Выполните всего 3 шага</div>
            </div>
            <div className={styles.description} itemProp="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.cardWrapper}>
                {
                    cardArr.map(item => {
                        return (
                            <div key={item.id} className={styles.cardContainer}>
                                <div className={styles.number} style={{ left: `${item.numberLeft}px` }}>{item.id}</div>
                                <div className={styles.HTPCard}>
                                    <HTPCard
                                        image={item.cardImage}
                                        step={item.id}
                                        title={item.cardTitle}
                                        description={item.description}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HowToStart