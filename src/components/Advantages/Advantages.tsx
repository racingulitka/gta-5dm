import React from 'react'
import Image from 'next/image'
import styles from './Advantages.module.scss'
import cn from 'classnames'
import { advantageArr } from './Advantage.config'
import baseballImage from './assets/baseballImage.png'
import topRightCrossImage from './assets/topRightCrossImage.png'
import bottomLeftCrossImage from './assets/bottomLeftCrossImage.png'
import smallCrossImage from './assets/smallCrossImage.png'
import gunImage from './assets/gunImage.png'
import ak1Image from './assets/ak1Image.png'
import ak2Image from './assets/ak2Image.png'
import { Parallax } from 'react-scroll-parallax'


const Advantages = () => {


    return(
        <div className={styles.wrapper}>
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={topRightCrossImage} alt='topRightCrossImage' className={styles.topRightCrossImage} />
            <Image src={bottomLeftCrossImage} alt='bottomLeftCrossImage' className={styles.bottomLeftCrossImage} />
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageFirst} />
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageSecond} />
            <Image src={gunImage} alt="gunImage" className={styles.gunImage} />
            <Image src={ak1Image} alt="ak1Image" className={styles.ak1Image} />
            <Image src={ak2Image} alt="ak2Image" className={styles.ak2Image} />
            <div className={styles.mainTitle}>Преимущества</div>
            {
                advantageArr.map(item => {
                    return(
                        <Parallax
                            speed={-10}
                            translateY={[-30, 30]}
                            scale={[0.9, 1]}
                            translateX={item.id === 2 ? [0, -3] : [0, 3]}
                            key={item.id}
                            className={cn(styles.flexContainer, item.id === 2 && styles.flexContainerReverse)}
                        >
                            <div
                                className={styles.imageBlock}
                            >
                                <Image src={item.image} alt='image' className={styles.image} />
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div> 
                        </Parallax>
                    )
                })
            }
        </div>
    )
}

export default Advantages