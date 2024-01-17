import React from 'react'
import styles from './HTPCard.module.scss'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import BuyButton from '../BuyButton/BuyButton'

const HTPCard = ({
    image,
    step,
    title,
    description
}: {
    image: StaticImageData,
    step: number,
    title: string,
    description: string
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}></div>
            <Image src={image} alt='image' className={styles.image} />
            <div className={styles.flexContainer}>
                <div className={styles.step}>Шаг {step}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.buyButton}>
                <BuyButton />
            </div>
        </div>
    )
}

export default HTPCard