import React from 'react'
import Image from 'next/image'
import styles from './Advantages.module.scss'
import cn from 'classnames'
import { advantageArr } from './Advantage.config'

const Advantages = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.mainTitle}>Преимущества</div>
            {
                advantageArr.map(item => {
                    return(
                        <div
                            key={item.id}
                            className={cn(styles.flexContainer, item.id === 2 && styles.flexContainerReverse)}
                        >
                            <div className={styles.imageBlock}>
                                <Image src={item.image} alt='image' />
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Advantages