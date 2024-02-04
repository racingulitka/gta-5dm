export const handleNavigation = (sectionId: string) => {
    const sectionToGo = document.getElementById(sectionId)
    window.scrollTo(0, 0)
    if (sectionToGo) {
      sectionToGo.scrollIntoView({ behavior: 'smooth' })
    }
  }