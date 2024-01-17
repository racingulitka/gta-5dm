import React from 'react'
import styles from './MediaButton.module.scss'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

const MediaButton = ({
    icon,
}: {
    icon: StaticImageData
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flexContainer}>
                <div className={styles.iconContainer}>
                    <div className={styles.background}>
                        <Image src={icon} alt='image' className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaButton