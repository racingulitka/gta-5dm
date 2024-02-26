import React, { useState } from 'react'
import styles from './FAQ.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { FAQdatabase } from './FAQ.config';
import SideMenu from './SideMenu/SideMenu'
import Accordeon from './Accordeon/Accordeon'
import smallCross from './assets/smallCross.svg'
import mediumCross from './assets/mediumCross.svg'
import largeCross from './assets/LargeCross.svg'

const FAQ = () => {
    const navArr = FAQdatabase.map(item => {
        return (
            { id: item.id, category: item.category }
        )
    })

    const [activeCategory, setActiveCategory] = useState<number>(1)
    const activeCategoryArr = FAQdatabase.find(item => item.id === activeCategory)

    return (
        <div itemScope itemType="https://schema.org/FAQPage" id='faq' className={styles.wrapper}>
            <Image src={smallCross} alt='smallCross' className={styles.smallCross1} />
            <Image src={smallCross} alt='smallCross' className={styles.smallCross2} />
            <Image src={smallCross} alt='smallCross' className={styles.smallCross3} />
            <Image src={mediumCross} alt='mediumCross' className={styles.mediumCross} />
            <Image src={largeCross} alt='largeCross' className={styles.largeCross1} />
            <Image src={largeCross} alt='largeCross' className={styles.largeCross2} />
            <main>
                <header>
                    <h2>Часто спрашивают</h2>
                    <Image src={logo} alt='logo' className={styles.logo} />
                </header>
                <div className={styles.mainFlexContainer}>
                    <nav>
                        <SideMenu
                            array={navArr}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                    </nav>
                    <div className={styles.infoBlock}>
                        <h3>Какая то категория</h3>
                        <div className={styles.scroller}>
                        {
                            activeCategoryArr && activeCategoryArr.questions.map(item => {
                                return(
                                    <Accordeon
                                        key={item.id}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default FAQ