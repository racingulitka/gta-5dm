import React from 'react'
import Image from 'next/image'
import styles from './Advantages.module.scss'
import cn from 'classnames'
import { advantageArr } from './Advantage.config'
import baseballImage from './assets/baseballImage.webp'
import topRightCrossImage from './assets/topRightCrossImage.webp'
import bottomLeftCrossImage from './assets/bottomLeftCrossImage.webp'
import smallCrossImage from './assets/smallCrossImage.webp'
import gunImage from './assets/gunImage.webp'
import ak1Image from './assets/ak1Image.webp'
import ak2Image from './assets/ak2Image.webp'
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'

const Advantages = () => {

    const [ref, inView] = useInView({
        triggerOnce: false, // событие срабатывает только один раз
    });

    return (
        <div id='advantages' className={styles.wrapper} itemScope itemType="http://schema.org/WebPage">
            <meta itemProp="name" content="Advantages Section" />
            <meta itemProp="description" content="Секция с игровыми режимами на сервере GTA5DM." />
            <Image src={baseballImage} alt='baseballImage' className={styles.baseballImage} />
            <Image src={topRightCrossImage} alt='topRightCrossImage' className={styles.topRightCrossImage} />
            <Image src={bottomLeftCrossImage} alt='bottomLeftCrossImage' className={styles.bottomLeftCrossImage} />
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageFirst} />
            <Image src={smallCrossImage} alt="smallCrossImage" className={styles.smallCrossImageSecond} />
            <Image src={gunImage} alt="gunImage" className={styles.gunImage} />
            <Image src={ak1Image} alt="ak1Image" className={styles.ak1Image} />
            <Image src={ak2Image} alt="ak2Image" className={styles.ak2Image} />
            <h1
                className={styles.mainTitle}
                itemProp="headline"
            >
                Игровые режимы
            </h1>
            {
                advantageArr.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={cn(styles.flexContainer, item.id === 2 && styles.flexContainerReverse)}
                        >
                            <div
                                ref={ref}
                                className={styles.imageBlock}
                            >
                                <Parallax
                                    speed={item.id !== 2 ? 0 : 5}
                                    translateX={item.id !== 2 ? [-8, 0] : [8, 0]}
                                    opacity={[0, 1]}
                                    easing={[.36, .72, .48, 1.03]}
                                //easing={[0, 2, 0.5, -2]}

                                >
                                    <Image src={item.image} alt='image' className={styles.image} />
                                </Parallax>
                            </div>
                            <Parallax
                                speed={item.id !== 2 ? 5 : 0}
                                translateX={item.id !== 2 ? [8, 0] : [-8, 0]}
                                opacity={[0, 1]}
                                easing={[.36, .72, .48, 1.03]}
                                //easing={[0, 2, 0.5, -2]}
                                className={styles.infoBlock}

                            >
                                <div className={styles.title} itemProp="name" >{item.title}</div>
                                <div className={styles.description} itemProp="description" >{item.description}</div>
                                <div className={styles.text} itemProp="text" >{item.text}</div>
                            </Parallax>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Advantages