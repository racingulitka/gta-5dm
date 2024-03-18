import React, { useState } from 'react'
import styles from './Accordeon.module.scss'
import cn from 'classnames'

const Accordeon = ({
    question,
    answer,
}: {
    question: string,
    answer: string,
}) => {
    const [isActive, setActive] = useState<boolean>(false)
    return (
        <div className={cn(styles.wrapper, isActive && styles.wrapperActive)}>
            <div
                itemScope
                itemProp='mainEntity'
                itemType='https://schema.org/Question'
                className={styles.question}
                onClick={() => setActive(prev => !prev)}
            >
                <div className={cn(styles.titleInactive, isActive && styles.titleActive)}>{question}</div>
                <div
                    className={cn(styles.buttonInactive, isActive && styles.buttonActive)}
                >
                    <div className={cn(styles.stick1Inactive, isActive && styles.stick1Active)}></div>
                    <div className={cn(styles.stick2Inactive, isActive && styles.stick2Active)}></div>
                </div>
            </div>
            <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className={cn(styles.answerInactive, isActive && styles.answerActive)}
            >
                {answer}
            </div>
        </div>
    )
}

export default Accordeon