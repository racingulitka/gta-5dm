import { useRouter } from 'next/router'
import { wikiArr } from '@/components/Wiki/Wiki.config'
import React, { useState, useEffect } from 'react'
import styles from './slug.module.scss'
import mainStyles from '@/styles/Home.module.css'
import WikiHeader from '../../components/common/WikiHeader/WikiHeader'
import Footer from '@/components/common/Footer/Footer'
import PaymentModal from '@/components/common/PaymentModal/PaymentModal'
import Image from 'next/image'
import SkinCard from '@/components/Wiki/SkinCard/SkinCard'
import smallCross from './assets/smallCross.svg'
import middleCross from './assets/middleCross.svg'
import bigCross from './assets/bigCross.svg'
import Link from 'next/link'
import toTheUpIcon from './assets/toTheUpIcon.svg'
import HamburgerMenuWiki from '@/components/common/HamburgerMenuWiki/HamburgerMenuWiki'
import logo from './[slug]/assets/logo.svg'
//import SortSelect from '@/components/common/SortSelect/SortSelect'
//import { Category } from '@/server/models'

interface WeaponCharacteristics {
  reloadDuration: { name: string, value: string[], units?: string },
  bodyDamage: { name: string, value: string[], units?: string },
  headDamage: { name: string, value: string[], units?: string },
  paymentForKill: { name: string, value: string[], units?: string },
  bulletsBox: { name: string, value: string[], units?: string },
  inGamePrice: { name: string, value: string[], units?: string },
  accuracyRange: { name: string, value: string[], units?: string },
  accuracyTemp: { name: string, value: string[], units?: string },
  runSpeed: { name: string, value: string[], units?: string },
  side: { name: string, value: string[], units?: string },
}

// export const getServerSideProps = async () => {
//   const category = await Category.findAll()
//   const rawData = category.map((d) => ({
//     ...d.toJSON(),
//   }));
//   return {props:{weapons:rawData}}
// };

export default function Page(/*{weapons}:{weapons:any[]}*/) {

  //console.log(weapons[0].title)

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const updateMobileView = () => {
      setMobileView(window.innerWidth < 767);
    };

    // Вызовем updateMobileView при монтировании компонента
    updateMobileView();

    // Добавим слушатель события resize, чтобы обновлять mobileView при изменении размеров окна
    window.addEventListener('resize', updateMobileView);

    // Удалим слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateMobileView);
    };
  }, [])

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [sortId, setSortId] = useState<number>(1)

  const findWeapon = () => {
    for (const category of wikiArr) {
      const foundWeapon = category.categoryArr.find(weapon => weapon.title === router.query.slug)
      if (foundWeapon) return foundWeapon
    }
  }

  const sortSkins = (id: number) => {
    let ss
    if (weapon) {
      if (weapon.skins) {
        if (id === 1) {
          ss = weapon.skins.sort((a, b) => {
            return a.price[0] - b.price[0]
          })
        } else if (id === 2) {
          ss = weapon.skins.sort((a, b) => {
            return b.price[0] - a.price[0]
          })
        }
      }
    }
    return ss
  }

  const router = useRouter()
  const weapon = findWeapon()
  const sortedSkins = sortSkins(sortId)
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<number>(0)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  const onRequestClose = () => {
    setShowPaymentModal(false)
  }



  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          {
            mobileView && <Image src={logo} alt='logo' className={styles.logo} />
          }
          {
            mobileView ?
              <HamburgerMenuWiki
                getDonat={setShowPaymentModal}
              />
              : <WikiHeader getDonat={setShowPaymentModal} />
          }
        </header>
        <main className={mainStyles.main}>
          {!mobileView && <Image src={smallCross} alt='smallCross' className={styles.smallCross1} />}
          {!mobileView && <Image src={smallCross} alt='smallCross' className={styles.smallCross2} />}
          {!mobileView && <Image src={middleCross} alt='middleCross' className={styles.middleCross} />}
          {!mobileView && <Image src={bigCross} alt='bigCross' className={styles.bigCross1} />}
          {!mobileView && <Image src={bigCross} alt='bigCross' className={styles.bigCross2} />}
          {
            isScrolled > 1080 && !mobileView &&
            <div className={styles.toTop} onClick={() => onScrollTop()}>
              <div className={styles.square}>
                <Image src={toTheUpIcon} alt='toTheUpIcon' className={styles.toTheUpIcon} />
              </div>
              <div className={styles.title}>Наверх</div>
            </div>
          }
          {
            showPaymentModal &&
            <PaymentModal onRequestClose={onRequestClose} />
          }
          {weapon &&
            <div className={styles.contentContainer}>
              <div className={styles.activePage}><Link href={'/wiki'}>Главная</Link> / <span>{router.query.slug}</span></div>
              <div className={styles.sortSelect}>
                {/* <SortSelect
                  setSortId={setSortId}
                /> */}
              </div>
              <div className={styles.leftContainer}>
                <div className={styles.justBlockForSticky}></div>
                <div className={styles.sticky}>
                  <div className={styles.weaponIcon}>
                    <Image src={weapon.icon} alt='weaponIcon' className={styles.icon} />
                    <div className={styles.title}>{weapon.title}</div>
                  </div>
                  <div className={styles.characteristics}>
                    {weapon.characteristics &&
                      Object.keys(weapon.characteristics).map((item, index) => {
                        const key = item as keyof WeaponCharacteristics;
                        const data = weapon.characteristics[key]
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
                  {/* <div className={styles.spreadControl}>
                  <div className={styles.title}>Контроль разброса</div>
                  <Image src={weapon.spreadControl} alt='spreadControlImage' className={styles.image} />
                </div> */}
                </div>

              </div>
              <div className={styles.rightContainer}>
                {
                  // weapon.skins && weapon.skins.map(skin => {
                  sortedSkins && sortedSkins.map(skin => {
                    return (
                      <Link key={skin.id} href={`/wiki/${weapon.title}/${skin.id}`}>
                        <SkinCard
                          weaponTitle={weapon.title}
                          skinTitle={skin.title}
                          icon={skin.icon}
                          price={skin.price}
                        />
                      </Link>
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