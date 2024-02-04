import { useRouter } from 'next/router'
import { wikiArr } from '@/components/Wiki/Wiki.config'
import React, { useState } from 'react'
import styles from './slug.module.scss'
import mainStyles from '@/styles/Home.module.css'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'
import { handleNavigation } from '@/utils/handleNavigation'
import PaymentModal from '@/components/common/PaymentModal/PaymentModal'
import Image from 'next/image'
import SkinCard from '@/components/Wiki/SkinCard/SkinCard'
import smallCross from './assets/smallCross.svg'
import middleCross from './assets/middleCross.svg'
import bigCross from './assets/bigCross.svg'

export default function Page() {

  const findWeapon = () => {
    for (const category of wikiArr) {
      const foundWeapon = category.categoryArr.find(weapon => weapon.title === router.query.slug)
      if (foundWeapon) return foundWeapon
    }
  }

  const router = useRouter()
  const weapon = findWeapon()
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)

  const onRequestClose = () => {
    setShowPaymentModal(false)
  }



  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header handleNavigation={handleNavigation} getDonat={setShowPaymentModal} />
        </header>
        <main className={mainStyles.main}>
          <Image src={smallCross} alt='smallCross' className={styles.smallCross1} />
          <Image src={smallCross} alt='smallCross' className={styles.smallCross2} />
          <Image src={middleCross} alt='middleCross' className={styles.middleCross} />
          <Image src={bigCross} alt='bigCross' className={styles.bigCross1} />
          <Image src={bigCross} alt='bigCross' className={styles.bigCross2} />
          {
            showPaymentModal &&
            <PaymentModal onRequestClose={onRequestClose} />
          }
          {weapon &&
            <div className={styles.contentContainer}>
              <div className={styles.leftContainer}>
                <div className={styles.weaponIcon}>
                  <Image src={weapon.icon} alt='weaponIcon' className={styles.icon} />
                  <div className={styles.title}>{weapon.title}</div>
                </div>
                <div className={styles.characteristics}>
                  {
                    Object.keys(weapon.characteristics).map((item, index) => {
                      const data = weapon.characteristics[item]
                      return (
                        <div key={index} className={styles.weaponParameter}>
                          <div className={styles.weaponParameterName}>{data.name}</div>
                          <div className={styles.weaponParameterValue}>
                            <span>{data.value[0]} </span>
                            {
                              data.value.length > 1 && <span>/{data.value[1]}</span>
                            }
                            {
                              data.units && <span className={styles.yellow}>{data.units}</span>
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className={styles.description}>{weapon.description}</div>
                <div className={styles.spreadControl}>
                  <div className={styles.title}>Контроль разброса</div>
                  <Image src={weapon.spreadControl} alt='spreadControlImage' className={styles.image} />
                </div>
              </div>
              <div className={styles.rightContainer}>
                {
                  weapon.skins && weapon.skins.map(skin => {
                    return (
                      <SkinCard
                        key={skin.id}
                        weaponTitle={weapon.title}
                        skinTitle={skin.title}
                        icon={skin.icon}
                        price={skin.price}
                      />
                    )
                  })
                }
              </div>
            </div>
          }
        </main>
        <footer className={mainStyles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  )
}