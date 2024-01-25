import React, { useState, useEffect } from 'react'
import styles from './FillDataScreen.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import loginIcon from './assets/loginIcon.svg'
import paymentValueIcon from './assets/paymentValueIcon.svg'
import CheckBox from '@/components/common/CheckBox/CheckBox'
import cardIcon from './assets/cardIcon.svg'
import cardIconActive from './assets/cardIconActive.svg'
import ofertaIcon from './assets/ofertaIcon.svg'

const FillDataScreen = ({
    setActiveTab
}:{
    setActiveTab:React.Dispatch<React.SetStateAction<number>>
}) => {

    const [login, setLogin] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [isOferta, setOferta] = useState<boolean>(false)
    const [isOther, setOther] = useState<boolean>(false)
    const [isFilled, setFilled] = useState<boolean>(false)

    useEffect(() => {
        if (login && value && isOferta && isOther) setFilled(true)
        else setFilled(false)
    }, [login, value, isOferta, isOther])

    const onLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.replace(/[^a-zA-Z0-9]/g, '')
        setLogin(inputValue)
    }

    const onValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.replace(/\D/g, '')
        setValue(inputValue)

    }

    const formatValue = (value: string) => {
        const formattedValue = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
        return formattedValue
    }

    const currencyExchange = 2

    const exchangeFunc = (value: number) => {
        return value * currencyExchange
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.paymentMethod}>
                <div className={styles.title}>Выбор способа оплаты</div>
                <div className={styles.loginWrapper}>
                    <input
                        type='text'
                        className={styles.loginInput}
                        placeholder='Введите ваш логин'
                        onChange={(event) => onLoginInput(event)}
                        value={login}
                        minLength={3}
                        maxLength={15}
                    />
                    <Image src={loginIcon} alt='loginIcon' className={styles.loginIcon} />
                </div>
                <div className={styles.paymentValueWrapper}>
                    <input
                        type='text'
                        className={styles.paymentValueInput}
                        placeholder='Введите сумму'
                        value={formatValue(value)}
                        onChange={(event) => onValueInput(event)}
                        minLength={1}
                        maxLength={8}
                    />
                    <Image src={paymentValueIcon} alt='loginIcon' className={styles.paymentValueIcon} />
                    <div className={styles.paymentConvertContainer}>
                        <div className={cn(styles.multiplier, currencyExchange < 2 && styles.noMultiplier)}>x{currencyExchange}</div>
                        <div className={styles.convertedValue}>{formatValue(String(exchangeFunc(Number(value))))}</div>
                        <div className={styles.coins}>Coins</div>
                    </div>
                </div>
                <div className={styles.ofertaBlock}>
                    <CheckBox
                        isActive={isOferta}
                        setActive={setOferta}
                    />
                    <div className={styles.ofertaDescription}>
                        Я ознакомился с условием оферты
                    </div>
                </div>
                <div className={styles.otherBlock}>
                    <CheckBox
                        isActive={isOther}
                        setActive={setOther}
                    />
                    <div className={styles.otherDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div
                    className={cn(styles.nextScreenButton, isFilled && styles.nextScreenButtonActive)}
                    onClick={() => setActiveTab(2)}
                >
                    <Image src={isFilled ? cardIconActive : cardIcon} alt='cardIcon' className={styles.cardIcon} />
                    <div className={cn(styles.text, isFilled && styles.textActive)}>Перейти к способам оплаты</div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>Информация</div>
                <div className={styles.exchangeInfo}>Обменный курс: 1р. = <span>{currencyExchange} coin</span></div>
                <div className={styles.textBlock}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br/>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={styles.ofertaLink}>
                    <Image src={ofertaIcon} alt='ofertaIcon' className={styles.ofertaIcon} />
                    <div className={styles.text}>Договор оферты</div>
                </div>
            </div>
        </div>
    )
}

export default FillDataScreen