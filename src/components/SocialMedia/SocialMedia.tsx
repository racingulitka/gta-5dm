import React from 'react'
import styles from './SocialMedia.module.scss'
import Image from 'next/image'
import MediaButton from './MediaButton/MediaButton'
import { mediaButtonsArr } from './SocialMedia.config';

import tiktokBackground from './assets/tiktokBackground.png'
import youtubeBackground from './assets/youtubeBackground.png'
import telegramBackground from './assets/telegramBackground.png'
import vkBackground from './assets/vkBackground.png'

const SocialMedia = () => {
    return (
        <div className={styles.wrapper}>
            <Image src={tiktokBackground} alt='tiktokBackground' className={styles.tiktokBackground} />
            <Image src={youtubeBackground} alt='youtubeBackground' className={styles.youtubeBackground} />
            <Image src={telegramBackground} alt='telegramBackground' className={styles.telegramBackground} />
            <Image src={vkBackground} alt='vkBackground' className={styles.vkBackground} />
            <div className={styles.content}>
                <h2 className={styles.title}>Следи за нами и получайте ценные призы!</h2>
                <p className={styles.description}>В наших соц сетях мы часто публикуем промокоды, проводим конкурсы. разыгрываем подарки, и многое другое.</p>
                <div className={styles.flexContainer}>
                    {
                        mediaButtonsArr.map(item => {
                            return (
                                <MediaButton
                                    icon={item.icon}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialMedia