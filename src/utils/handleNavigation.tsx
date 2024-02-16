export const handleNavigation = (sectionId: string) => {
    const sectionToGo = sectionId !== 'wiki' ? document.getElementById(sectionId) : '/wiki'
    window.scrollTo(0, 0)
    if (sectionToGo !== null && sectionToGo !== '/wiki') {
      sectionToGo.scrollIntoView({ behavior: 'smooth' })
    } else location.href=`${sectionToGo}`
  }