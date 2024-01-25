import React, { useState, useEffect } from 'react'
import styles from './PaymentModal.module.scss'
import cn from 'classnames'
import FillDataScreen from './screens/FillDataScreen/FillDataScreen'
import ChosePaymentMethodScreen from './screens/ChosePaymentMethodScreen/ChosePaymentMethodScreen'

const PaymentModal = ({
    onRequestClose
}: {
    onRequestClose: () => void
}) => {

    const [activeTab, setActiveTab] = useState<number>(1)

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        onRequestClose()
    }

    const handleClickDialog = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onRequestClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div
            className={styles.wrapper}
            onClick={(event) => handleClick(event)}
        >
            <div
                className={styles.dialog}
                onClick={(event) => handleClickDialog(event)}
            >
                <div className={styles.header}>
                    <div
                        className={styles.fillData}
                    >
                        <div className={cn(styles.numberSquare, activeTab === 1 && styles.numberSquareActive)}>1</div>
                        <div className={cn(styles.title, activeTab === 1 && styles.titleActive)}>Оформление</div>
                    </div>
                    <div className={styles.splitter}> </div>
                    <div
                        className={styles.chosePaymentMethod}
                    >
                        <div className={cn(styles.numberSquare, activeTab === 2 && styles.numberSquareActive)}>2</div>
                        <div className={cn(styles.title, activeTab === 2 && styles.titleActive)}>Выбор способа оплаты</div>
                    </div>
                </div>
                {
                    activeTab === 1 ? <FillDataScreen setActiveTab={setActiveTab}/> : <ChosePaymentMethodScreen />
                }
            </div>
        </div>
    )
}

export default PaymentModal