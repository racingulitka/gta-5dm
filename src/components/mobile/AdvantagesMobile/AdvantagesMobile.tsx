import React from 'react'
import Image from 'next/image'
import styles from './AdvantagesMobile.module.scss'
import cn from 'classnames'
import { advantageArr } from '../../Advantages/Advantage.config'
import baseballImage from './assets/baseballImage.png'
import topRightCrossImage from './assets/topRightCrossImage.png'
import bottomLeftCrossImage from './assets/bottomLeftCrossImage.png'
import smallCrossImage from './assets/smallCrossImage.png'
import gunImage from './assets/gunImage.png'
import ak1Image from './assets/ak1Image.png'
import ak2Image from './assets/ak2Image.png'

const AdvantagesMobile = () => {
    return(
        <div id='advantages' className={styles.wrapper} itemScope itemType="http://schema.org/WebPage">
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={topRightCrossImage} alt='topRightCrossImage' className={styles.topRightCrossImage} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={bottomLeftCrossImage} alt='bottomLeftCrossImage' className={styles.bottomLeftCrossImage} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageFirst} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageSecond} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={gunImage} alt="gunImage" className={styles.gunImage} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={ak1Image} alt="ak1Image" className={styles.ak1Image} itemScope itemType="http://schema.org/ImageObject"/>
            <Image src={ak2Image} alt="ak2Image" className={styles.ak2Image} itemScope itemType="http://schema.org/ImageObject"/>
            <div className={styles.mainTitle} itemScope itemType="http://schema.org/Text">Преимущества</div>
            {
                advantageArr.map(item => {
                    return(
                        <div
                            key={item.id}
                            className={cn(styles.flexContainer)}
                            itemScope itemType="http://schema.org/ListItem"
                        >
                            <div className={styles.imageBlock}>
                                <Image src={item.image} alt='image' className={styles.image} itemScope itemType="http://schema.org/ImageObject"/>
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.title} itemScope itemType="http://schema.org/Text">{item.title}</div>
                                <div className={styles.description} itemScope itemType="http://schema.org/Text">{item.description}</div>
                            </div> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdvantagesMobile