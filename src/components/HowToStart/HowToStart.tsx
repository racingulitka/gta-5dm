import React from 'react'
import styles from './HowToStart.module.scss'
import { cardArr } from './HowToStart.config'
import HTPCard from './HTPCard/HTPCard'
import logo from './assets/logo.png'
import Image from 'next/image'

const HowToStart = () => {
    return (
        <div className={styles.wrapper}>
            <Image src={logo} alt='logo' className={styles.logo} />
            <div className={styles.header}>
                <h2 className={styles.title}>Как начать играть</h2>
                <div className={styles.pseudoButton}>Выполните всего 3 шага</div>
            </div>
            <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            {
                cardArr.map(item => {
                    return (
                        <div key={item.id} className={styles.cardContainer} style={{ left: `${item.cardleft}px` }}>
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
    )
}

export default HowToStart