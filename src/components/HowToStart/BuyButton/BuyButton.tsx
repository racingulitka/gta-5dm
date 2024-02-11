import React, { useState, useEffect, useRef } from 'react'
import styles from './BuyButton.module.scss'
import cn from 'classnames'

const BuyButton = ({width}:{width?:number}) => {

    const [buttonState, setButtonState] = useState<boolean>(false)
    const buttonRef = useRef<HTMLDivElement | null>(null)

    const handleMouseDown = () => {
        setButtonState(true)
    }

    const handleMouseUp = () => {
        setButtonState(false)
    }

    useEffect(() => {
        buttonRef.current && buttonRef.current.addEventListener('mousedown', handleMouseDown)
        return () => {
            buttonRef.current && buttonRef.current.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    useEffect(() => {
        buttonRef.current && buttonRef.current.addEventListener('mouseup', handleMouseUp)
        return () => {
            buttonRef.current && buttonRef.current.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (
        <div ref={buttonRef} className={cn(styles.wrapper, buttonState && styles.mouseDown)} style={{width: width ? `${width}px` : '123px'}}>
            Купить
        </div>
    )
}

export default BuyButton