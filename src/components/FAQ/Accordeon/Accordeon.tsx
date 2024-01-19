import React, {useState} from 'react'
import styles from './Accordeon.module.scss'
import cn from 'classnames'

const Accordeon = ({
    question,
    answer,
}:{
    question:string,
    answer:string,
}) => {
    console.log(answer)
    const [isActive, setActive] = useState<boolean>(false)
    return(
        <div className={styles.wrapper}>
            <div className={styles.question}>
                <div className={styles.title}>{question}</div>
                <div
                    className={cn(styles.buttonInactive, isActive && styles.buttonActive)}
                    onClick={() => setActive(prev => !prev)}
                >
                    <div className={cn(styles.stick1Inactive, isActive && styles.stick1Active)}></div>
                    <div className={cn(styles.stick2Inactive, isActive && styles.stick2Active)}></div>
                </div>
            </div>
        </div>
    )
}

export default Accordeon