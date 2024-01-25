import React, {useState} from 'react'
import styles from './ChosePaymentMethodScreen.module.scss'
import cn from 'classnames'
import cardIcon from '../FillDataScreen/assets/cardIcon.svg'
import cardIconActive from '../FillDataScreen/assets/cardIconActive.svg'
import Image from 'next/image'

const ChosePaymentMethodScreen = () => {

    const [selectedMethod, setSelectedMethod] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Выбор способа оплаты</div>

            <div className={styles.paymentVariants}>

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