import React from 'react'
import styles from './NewsMobile.module.scss'
import { newsArr } from '@/components/News/News.config'
import Image from 'next/image'
import DetailsButton from '@/components/News/Details/DetailsButton'
import cn from 'classnames'
import gunImage from './assets/gunImage.png'
import gunSmallImage from './assets/gunSmallImage.png'
import baseballImage from './assets/baseballImage.png'
import akImage from './assets/akImage.png'
import ak2Image from './assets/ak2Image.png'

const NewsMobile = () => {
    return (
        <div className={styles.wrapper}>
            <Image src={gunImage} alt='gunImage' className={styles.gunImage} />
            <Image src={akImage} alt='akImage' className={styles.akImage} />
            <Image src={ak2Image} alt='ak2Image' className={styles.ak2Image} />
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={gunSmallImage} alt='gunSmallImage' className={styles.gunSmallImage} />
            <h1 className={styles.title}>Новости</h1>
            {
                newsArr.map(item => {
                    const additionalClass = item.id === 2 || item.id === 5
                        ? styles.secondCard
                            :item.id === 3
                                ? styles.thirdCard
                        : ''
                    return (
                        <div
                            key={item.id}
                            className={cn(styles.newsCard, additionalClass)}
                        >
                            <h2 className={cn(styles.subtitle, item.id === 3 && styles.yellowSubtitle)}>{item.title}</h2>
                            <p className={cn(styles.description, item.id === 3 && styles.yellowCard)}>{item.text}</p>
                            <div className={styles.image}>
                                {item.image && <Image src={item.image} alt='image' layout='fill' objectFit='cover' />}
                                </div>
                            <div className={styles.footer}>
                                <div className={cn(styles.date, item.id === 3 && styles.yellowCard)}>{item.date}</div>
                                <DetailsButton backgroundColor={item.id === 3 ? 'rgba(26, 26, 30, 0.35)' : undefined}/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NewsMobile