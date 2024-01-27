import React, { useState } from 'react'
import styles from './ChosePaymentMethodScreen.module.scss'
import cn from 'classnames'
import cardIcon from '../FillDataScreen/assets/cardIcon.svg'
import cardIconActive from '../FillDataScreen/assets/cardIconActive.svg'
import Image from 'next/image'
import { paymentMethodsArr } from './ChosePaymentMethodScreen.config'
import tricolorItemIcon from './assets/tricolorItemIcon.svg'

const ChosePaymentMethodScreen = () => {

    const [selectedMethod, setSelectedMethod] = useState<number>(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Выбор способа оплаты</div>

            <div className={styles.paymentVariants}>
                {
                    paymentMethodsArr.map(item => {
                        return (
                            <div
                                key={item.id}
                                className={cn(styles.paymentVariant, item.id === selectedMethod && styles.paymentVariantActive)}
                                onClick={() => setSelectedMethod(item.id)}
                            >
                                <div className={styles.icons}>
                                    <item.icon isSelected={item.id === selectedMethod}/>
                                    {item.isRussian && <Image src={tricolorItemIcon} alt='tricolorItemIcon' className={styles.tricolor} />}
                                </div>
                                {item.title && <div className={styles.title}>{item.title}</div>}
                            </div>
                        )
                    })
                }
            </div>

            <div
                className={cn(styles.nextScreenButton, selectedMethod && styles.nextScreenButtonActive)}
                onClick={() => console.log(1)}
            >
                <Image src={selectedMethod ? cardIconActive : cardIcon} alt='cardIcon' className={styles.cardIcon} />
                <div className={cn(styles.text, selectedMethod && styles.textActive)}>Перейти к оплате</div>
            </div>
        </div>
    )
}

export default ChosePaymentMethodScreen