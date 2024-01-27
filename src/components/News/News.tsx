import React, { useState, useEffect } from 'react'
import styles from './News.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { newsArr } from './News.config'
import DetailsButton from './Details/DetailsButton'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const News = () => {

    const step1Delay = 0
    const step2Delay = 1
    const step3Delay = 2
    const step4Delay = 3

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
        <div className={styles.wrapper} ref={ref}>
            {isVisible &&
                <motion.div className={styles.topLeftBlock} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: stepDuration, delay: step1Delay }} viewport={{ once: false }}>
                    <motion.div initial={{ opacity: 0, transform: 'translate(0, -51px)' }} animate={{ opacity: 1, transform: 'translate(0,0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                        <Image src={logo} alt='logo' className={styles.logo} />
                    </motion.div>
                    <div className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <div className={styles.title} >{newsArr[0].title}</div>
                            <div className={styles.text}>{newsArr[0].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date}>{newsArr[0].date}</div>
                                <DetailsButton />
                            </div>
                        </motion.div>
                        <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <Image src={newsArr[0].image} alt='defaultImage' />
                        </motion.div>
                    </div>
                </motion.div>
            }
            {isVisible &&
                <motion.div className={styles.bottomBlock} initial={{ width: 0 }} animate={{ width: 1191 }} transition={{ duration: stepDuration, delay: step1Delay }}>
                    <div className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step2Delay }}>
                            <div className={styles.title} >{newsArr[3].title}</div>
                            <div className={styles.text}>{newsArr[3].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date}>{newsArr[3].date}</div>
                                <DetailsButton />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className={styles.bottomRightBlock} initial={{ width: 0 }} animate={{ width: 729 }} transition={{ duration: stepDuration, delay: step3Delay }}>
                        <div className={styles.layoutBlock}>
                            <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <div className={styles.title} >{newsArr[4].title}</div>
                                <div className={styles.text}>{newsArr[4].text}</div>
                                <div className={styles.footer}>
                                    <div className={styles.date}>{newsArr[4].date}</div>
                                    <DetailsButton />
                                </div>
                            </motion.div>
                            <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <Image src={newsArr[4].image} alt='defaultImage' />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            }
            {isVisible &&
                <motion.div className={styles.rightBlock} initial={{ height: 0 }} animate={{ height: 1080 }} transition={{ duration: stepDuration, delay: step2Delay }}>
                    <div className={styles.layoutBlock}>
                        <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step3Delay }}>
                            <div className={styles.title}>{newsArr[1].title}</div>
                            <div className={styles.text}>{newsArr[1].text}</div>
                            <div className={styles.footer}>
                                <div className={styles.date}>{newsArr[1].date}</div>
                                <DetailsButton backgroundColor='rgba(26, 26, 30, 0.35)' />
                            </div>
                        </motion.div>
                        <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px) scale(0.9)' }} animate={{ opacity: 1, transform: 'translate(0, 0) scale(1)' }} transition={{ duration: stepDuration, delay: step3Delay }}>
                            <Image src={newsArr[1].image} alt='defaultImage' />
                        </motion.div>
                    </div>
                    <motion.div className={styles.topRightBlock} initial={{ height: 0 }} animate={{ height: 595 }} transition={{ duration: stepDuration, delay: step3Delay }}>
                        <div className={styles.layoutBlock}>
                            <motion.div className={styles.infoBlock} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                <div className={styles.title}>{newsArr[2].title}</div>
                                <div className={styles.text}>{newsArr[2].text}</div>
                                <motion.div className={styles.image} initial={{ opacity: 0, transform: 'translate(0, 30px)' }} animate={{ opacity: 1, transform: 'translate(0, 0)' }} transition={{ duration: stepDuration, delay: step4Delay }}>
                                    <Image src={newsArr[2].image} alt='defaultImage' />
                                </motion.div>
                                <div className={styles.footer}>
                                    <div className={styles.date}>{newsArr[2].date}</div>
                                    <DetailsButton />
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </motion.div>
            }
        </div>
    )
}

export default News