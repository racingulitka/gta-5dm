import React from 'react'
import styles from './MediaButton.module.scss'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import cn from 'classnames'

const MediaButton = ({
    id,
    icon,
    iconBorder,
    iconBoxShadow,
    name,
    color,
    textShadow,
    textBackground
}: {
    id:number
    icon: StaticImageData
    iconBorder:string
    iconBoxShadow:string
    name:string
    color:string
    textShadow:string
    textBackground:string
}) => {

    const numberWithSpaces = (number:number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }
    const followers = numberWithSpaces(55555)

    const iconAlign = id === 1 ? '0px' : '-1px'

    return (
        <div className={styles.wrapper}>
            <div className={styles.flexContainer}>
                <div className={styles.iconContainer}>
                    <div className={styles.background} style={{border:iconBorder, boxShadow:iconBoxShadow}}>
                        <Image src={icon} alt='image' className={styles.icon} style={{transform:`translate(0, ${iconAlign})`}} />
                    </div>
                </div>
                <div className={styles.textBlock}>
                    {
                        color === '' ?
                        <div
                            style={{backgroundImage:textBackground, textShadow}}
                            className={cn(styles.name, styles.nameBack)}
                        >
                                {name.toUpperCase()}
                        </div>:
                        <div
                            className={cn(styles.name)}
                            style={{color, textShadow }}
                        >
                                {name.toUpperCase()}
                        </div>
                    }
                   <div className={styles.followers}>{followers} <span>подписчиков</span></div>
                </div>
            </div>
        </div>
    )
}

export default MediaButton