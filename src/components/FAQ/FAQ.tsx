import React, { useState } from 'react'
import styles from './FAQ.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { FAQdatabase } from './FAQ.config';
import SideMenu from './SideMenu/SideMenu'
import Accordeon from './Accordeon/Accordeon'

const FAQ = () => {
    const navArr = FAQdatabase.map(item => {
        return (
            { id: item.id, category: item.category }
        )
    })

    const [activeCategory, setActiveCategory] = useState<number>(1)
    const activeCategoryArr = FAQdatabase.find(item => item.id === activeCategory)

    return (
        <div className={styles.wrapper}>
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
            </main>

        </div>
    )
}

export default FAQ