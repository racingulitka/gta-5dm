import React, { useState } from 'react'
import AccordeonMobile from './Accordeon/AccordeonMobile'
import styles from './FAQMobile.module.scss'
import { FAQdatabase } from './FAQ.config';
import cn from 'classnames'
// import smallCross from './assets/smallCross.svg'
// import mediumCross from './assets/mediumCross.svg'
// import largeCross from './assets/LargeCross.svg'

const FAQMobile = () => {
    const navArr = FAQdatabase.map(item => {
        return (
            { id: item.id, category: item.category }
        )
    })

    const [activeCategory, setActiveCategory] = useState<number>(1)
    const activeCategoryArr = FAQdatabase.find(item => item.id === activeCategory)

    return (
        <div id='faq' className={styles.wrapper}>
            {/* <Image src={smallCross} alt='smallCross' className={styles.smallCross1} />
            <Image src={smallCross} alt='smallCross' className={styles.smallCross2} />
            <Image src={smallCross} alt='smallCross' className={styles.smallCross3} />
            <Image src={mediumCross} alt='mediumCross' className={styles.mediumCross} />
            <Image src={largeCross} alt='largeCross' className={styles.largeCross1} />
            <Image src={largeCross} alt='largeCross' className={styles.largeCross2} /> */}
            <main>
                <header>
                    <h2>Часто спрашивают</h2>
                </header>
                <div className={styles.mainFlexContainer}>
                    <nav>
                        {
                            navArr.map(category => {
                                return (
                                    <div
                                        key={category.id}
                                        className={cn(styles.navCategory, activeCategory === category.id && styles.navCategoryActive)}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.category}
                                    </div>
                                )
                            })
                        }
                    </nav>
                    <div className={styles.infoBlock}>
                        <h3>{navArr.find(category => category.id === activeCategory)?.category}</h3>
                        <div className={styles.scroller}>
                            {
                                activeCategoryArr && activeCategoryArr.questions.map(item => {
                                    return (
                                        <AccordeonMobile
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

export default FAQMobile