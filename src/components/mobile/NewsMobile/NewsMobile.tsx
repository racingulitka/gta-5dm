import React from 'react'
import styles from './NewsMobile.module.scss'
import { newsArr } from '@/components/News/News.config'
import Image from 'next/image'
import DetailsButton from '@/components/News/Details/DetailsButton'
import cn from 'classnames'
import gunImage from './assets/gunImage.webp'
import gunSmallImage from './assets/gunSmallImage.webp'
import baseballImage from './assets/baseballImage.webp'
import akImage from './assets/akImage.webp'
import ak2Image from './assets/ak2Image.webp'

const NewsMobile = () => {
    return (
        <div id='news' className={styles.wrapper} itemScope itemType="http://schema.org/NewsArticle">
            <Image src={gunImage} alt='gunImage' className={styles.gunImage} />
            <Image src={akImage} alt='akImage' className={styles.akImage} />
            <Image src={ak2Image} alt='ak2Image' className={styles.ak2Image} />
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={gunSmallImage} alt='gunSmallImage' className={styles.gunSmallImage} />
            <h1 className={styles.title} itemProp="headline">Новости</h1>
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
                            itemScope itemType="http://schema.org/Article"
                        >
                            <h2 className={cn(styles.subtitle, item.id === 3 && styles.yellowSubtitle)} itemProp="headline">{item.title}</h2>
                            <p className={cn(styles.description, item.id === 3 && styles.yellowCard)} itemProp="description">{item.text}</p>
                            <div className={styles.image} itemProp="image">
                                {item.image && <Image src={item.image} alt='image' layout='fill' objectFit='cover' />}
                                </div>
                            <div className={styles.footer}>
                                <div className={cn(styles.date, item.id === 3 && styles.yellowCard)} itemProp="datePublished">{item.date}</div>
                                <DetailsButton backgroundColor={item.id === 3}/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NewsMobile