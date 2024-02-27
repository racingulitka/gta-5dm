import React from 'react'
import styles from './SocialMedia.module.scss'
import Image from 'next/image'
import MediaButton from './MediaButton/MediaButton'
import { mediaButtonsArr } from './SocialMedia.config';

import tiktokBackground from './assets/tiktokBackground.webp'
import youtubeBackground from './assets/youtubeBackground.webp'
import telegramBackground from './assets/telegramBackground.webp'
import vkBackground from './assets/vkBackground.webp'

const SocialMedia = () => {
    return (
        <div id='socialMedia' className={styles.wrapper} itemScope itemType="http://schema.org/Organization">
            <div className={styles.tiktokBackgroundBlock}>
                <div className={styles.tiktokBackgroundCover}></div>
                <Image src={tiktokBackground} alt='tiktokBackground' className={styles.tiktokBackground} />
            </div>
            <div className={styles.youtubeBackgroundBlock}>
                <div className={styles.youtubeBackgroundCover}></div>
                <Image src={youtubeBackground} alt='youtubeBackground' className={styles.youtubeBackground} />
            </div>
            <div className={styles.telegramBackgroundBlock}>
                <div className={styles.telegramBackgroundCover}></div>
                <Image src={telegramBackground} alt='telegramBackground' className={styles.telegramBackground} />
            </div>
            <div className={styles.vkBackgroundBlock}>
                <div className={styles.vkBackgroundCover}></div>
                <Image src={vkBackground} alt='vkBackground' className={styles.vkBackground} />
            </div>
            <div className={styles.content} itemScope itemType="http://schema.org/WebPage">
                <h2 className={styles.title} itemProp="name">Следи за нами и получайте ценные призы!</h2>
                <p className={styles.description} itemProp="description">В наших соц сетях мы часто публикуем промокоды, проводим конкурсы. разыгрываем подарки, и многое другое.</p>
                <div className={styles.flexContainer}>
                    {
                        mediaButtonsArr.map(item => {
                            return (
                                <MediaButton
                                    key={item.id}
                                    id={item.id}
                                    icon={item.icon}
                                    iconBorder={item.iconBorder}
                                    iconBoxShadow={item.iconBoxShadow}
                                    name={item.name}
                                    color={item.color}
                                    textShadow={item.textShadow}
                                    textBackground={item.textBackground}
                                    link={item.link}
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