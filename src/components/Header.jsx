import { useEffect, useState } from 'react'
import '../assets/styles/Header.css'
import logo from '../assets/images/logo.png'
import talkicon from '../assets/icons/chat-icon.png'

const menuIcons = import.meta.glob('../assets/icons/menu*.png', { eager: true, import: 'default' })

function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [activeMenu, setActiveMenu] = useState('home')
  const [isOnWave, setIsOnWave] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsOnWave(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const menuItems = [
    { id: 'home', label: 'Home', href: '#home', icon: 'menu1.png' },
    { id: 'education', label: 'Education', href: '#education', icon: 'menu3.png' },
    { id: 'experience', label: 'Experience', href: '#experience', icon: 'menu4.png' },
    { id: 'projects', label: 'Projects', href: '#projects', icon: 'menu2.png' },
    { id: 'about', label: 'About', href: '#about', icon: 'menu5.png' },
  ]

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId)
    setIsBurgerActive(false)
  }

  return (
    <header className={`header ${isOnWave ? 'header-on-wave' : ''}`}>
      <div className="logo">
        <img id="logo" src={logo} alt="Logo" />
        <a className="logo-title" href="#home" aria-label="Go to home">
          polanch
        </a>
        <p>soft dev</p>
      </div>
      <nav className={isBurgerActive ? 'mobile-open' : ''}>
        <span className="menu-title">Main Menu</span>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`menu-item ${activeMenu === item.id ? 'is-active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <span className="menu-checkbox" aria-hidden="true" />
            <span className="menu-text">{item.label}</span>
            <span className="menu-icon" aria-hidden="true">
              <img src={menuIcons[`../assets/icons/${item.icon}`] || ''} alt="" />
            </span>
          </a>
        ))}
      </nav>
      <div className="contact-me">
        <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
          Contact Me
          <img src={talkicon} alt="Talk Icon" />
        </button>
        <button
          id="burger"
          aria-label="Toggle menu"
          onClick={() => setIsBurgerActive((prev) => !prev)}
        >
          <svg
            className={`ham hamRotate ham7 ${isBurgerActive ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="56"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path
              className="line middle"
              d="m 70,50 h -40"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header