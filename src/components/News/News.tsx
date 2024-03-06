import React, { useState, useEffect } from 'react'
import styles from './News.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { newsArr } from './News.config'
import DetailsButton from './Details/DetailsButton'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const News = () => {

    const step1Delay = 1
    const step2Delay = 2
    const step3Delay = 3
    const step4Delay = 4

    const stepDuration = 0.5

    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    // Обработчик для изменения переменной при входе во вьюпорт
    const handleInView = () => {
        if (inView) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
    }, [inView]);

    return (
        <div id='news' className={styles.wrapper} ref={ref} itemScope itemType="http://schema.org/NewsArticle">
            {isVisible &&
                <motion.div className={styles.topLeftBlock} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: stepDuration, delay: step1Delay }} viewport={{ once: false }} itemScope itemType="http://schema.org/Article">
                    <motion.div initial={{ opacity: 0, transform: 'translate(0, -51px)' }} animate={{ opacity: 1, transform: 'translate(0,0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                        <Image src={logo} alt='logo' className={styles.logo} />
                    </motion.div>
                    <article className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <div className={styles.title} itemProp="headline">{newsArr[0].title}</div>
                            <div className={styles.text} itemProp="description">{newsArr[0].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date} itemProp="datePublished">{newsArr[0].date}</div>
                                <DetailsButton />
                            </div>
                        </motion.div>
                        <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <Image src={newsArr[0].image} alt='defaultImage' className={styles.img} itemProp="image" />
                        </motion.div>
                    </article>
                </motion.div>
            }
            {isVisible &&
                <motion.div className={styles.bottomBlock} initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: stepDuration, delay: step1Delay }}>
                    <article className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <div className={styles.title} itemProp="headline">{newsArr[3].title}</div>
                            <div className={styles.text} itemProp="description">{newsArr[3].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date} itemProp="datePublished">{newsArr[3].date}</div>
                                <DetailsButton backgroundColor={true}/>
                            </div>
                        </motion.div>
                    </article>
                    <motion.div className={styles.bottomRightBlock} initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: stepDuration, delay: step3Delay }}>
                        <article className={styles.layoutBlock}>
                            <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <div className={styles.title} itemProp="headline">{newsArr[4].title}</div>
                                <div className={styles.text} itemProp="description">{newsArr[4].text}</div>
                                <div className={styles.footer}>
                                    <div className={styles.date} itemProp="datePublished">{newsArr[4].date}</div>
                                    <DetailsButton />
                                </div>
                            </motion.div>
                            <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <Image src={newsArr[4].image} alt='defaultImage' itemProp="image"/>
                            </motion.div>
                        </article>
                    </motion.div>
                </motion.div>
            }
            {isVisible &&
                <motion.div className={styles.rightBlock} initial={{ height: 0 }} animate={{ height: 1080 }} transition={{ duration: stepDuration, delay: step2Delay }}>
                    <article className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step3Delay }}>
                            <div className={styles.title} itemProp="headline">{newsArr[1].title}</div>
                            <div className={styles.text} itemProp="description">{newsArr[1].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date} itemProp="datePublished">{newsArr[1].date}</div>
                                <DetailsButton backgroundColor={true} />
                            </div>
                        </motion.div>
                        <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px) scale(0.9)' }} animate={{ opacity: 1, transform: 'translate(0, 0) scale(1)' }} transition={{ duration: stepDuration, delay: step3Delay }}>
                            <Image src={newsArr[1].image} alt='defaultImage' itemProp="image" />
                        </motion.div>
                    </article>
                    <motion.div className={styles.topRightBlock} initial={{ height: 0 }} animate={{ height: 595 }} transition={{ duration: stepDuration, delay: step3Delay }}>
                        <article className={styles.layoutBlock}>
                            <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <div className={styles.title} itemProp="headline">{newsArr[2].title}</div>
                                <div className={styles.text} itemProp="description">{newsArr[2].text}</div>
                                <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                    <Image src={newsArr[2].image} alt='defaultImage' itemProp="image" />
                                </motion.div>
                                <div className={styles.footer}>
                                    <div className={styles.date} itemProp="datePublished">{newsArr[2].date}</div>
                                    <DetailsButton />
                                </div>
                            </motion.div>

                        </article>
                    </motion.div>
                </motion.div>
            }
        </div>
    )
}

export default News