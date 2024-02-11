import React from 'react'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
import openIcon from './assets/openIcon.svg'
import cn from 'classnames'
import Link from 'next/link'

const MenuItem = ({
    arr,
    activeCategoryId,
    setActiveCategoryId,
    onClick,
    activeItem,
    selectedWeapon,
    setSelectedWeapon
}: {
    arr: any
    activeCategoryId:number | null
    setActiveCategoryId:React.Dispatch<React.SetStateAction<number | null>>
    onClick: (id: number) => void
    activeItem: number | null
    selectedWeapon: number | null
    setSelectedWeapon: React.Dispatch<React.SetStateAction<number | null>>
}) => {

    const handleClick = () => {
        onClick(arr.categoryId)
    }

    const onItemClick = (itemId:number) => {
        onClick(arr.categoryId)
        setSelectedWeapon(itemId)
        setActiveCategoryId(arr.categoryId)
    }

    return (
        <div
            className={styles.wrapper}
            onClick={() => handleClick()}
        >
            <div className={cn(styles.title, arr.categoryId === activeItem && styles.titleActive)}>{arr.categoryTitle}</div>
            <Image src={openIcon} alt='openIcon' className={cn(styles.openIcon, arr.categoryId === activeItem && styles.openIconActive)} />
            <div className={cn(styles.menuSelect, arr.categoryId === activeItem && styles.menuSelectActive)}>
                {
                    arr.categoryId === activeItem && arr.categoryArr && arr.categoryArr.map(item => {
                        return (
                            <Link
                                key={item.id}
                                href={`/wiki/${item.title}`}
                                onClick={() => onItemClick(item.id)}
                            >
                                <div className={styles.weapon} >
                                    <Image src={item.icon} alt='icon' className={styles.icon} />
                                    <div className={cn(styles.title, activeCategoryId === arr.categoryId && selectedWeapon === item.id && styles.titleActive)}>{item.title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuItem