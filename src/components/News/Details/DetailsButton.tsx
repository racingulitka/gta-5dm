import React, {useState, useRef, useEffect} from 'react'
import styles from './DetailsButton.module.scss'
import cn from 'classnames'

const DetailsButton = ({backgroundColor}:{backgroundColor?:boolean}) => {

    const [buttonState, setButtonState] = useState<boolean>(false)
    const buttonRef = useRef<HTMLDivElement | null>(null)

    const handleMouseDown = () => {
        console.log('mouseDown')
        setButtonState(true)
    }

    const handleMouseUp = () => {
        setButtonState(false)
    }

    useEffect(() => {
        buttonRef.current?.addEventListener('mousedown', handleMouseDown)
        return () => {
            buttonRef.current?.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    useEffect(() => {
        buttonRef.current?.addEventListener('mouseup', handleMouseUp)
        return () => {
            buttonRef.current?.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])
    return(
        <div ref={buttonRef} className={cn(styles.wrapper, buttonState && styles.mouseDown, backgroundColor && styles.yellowButton)} /*style={{background:backgroundColor|| 'rgba(228, 165, 32, 0.5)'}}*/>
            Подробнее
        </div>
    )
}

export default DetailsButton