import { useEffect, useState } from 'react'
import '../assets/styles/Home.css'
import termo from '../assets/icons/termo.png'
import heart from '../assets/icons/heart.png'
import social1 from '../assets/icons/social1.png'
import social2 from '../assets/icons/social2.png'
import social3 from '../assets/icons/social3.png'
import social4 from '../assets/icons/social4.png'
import social5 from '../assets/icons/social5.png'
import wave1 from '../assets/images/wave1.svg'
import wave2 from '../assets/images/wave2.svg'
import hero1 from '../assets/images/hero1.jpg'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'
import hero4 from '../assets/images/hero4.jpg'

function Home() {
  const SLIDE_INTERVAL_MS = 5000
  const [showTopWave, setShowTopWave] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      image: hero1,
      leftText: 'My name is John Lloyd F. Olipani',
      rightText: new Date().toLocaleDateString(),
      alt: 'John Lloyd profile photo',
    },
    {
      image: hero2,
      leftText: 'My Permanent Address is in Aparri',
      rightText: 'Cagayan, Philippines',
      alt: 'Current location preview',
    },
    {
      image: hero3,
      leftText: 'I am twenty-four years old',
      rightText: 'Male',
      alt: 'Personal information preview',
    },
    {
      image: hero4,
      leftText: 'Currently based at Malanday',
      rightText: 'Valenzuela City, Philippines',
      alt: 'Creative work preview',
    },
  ]

  useEffect(() => {
    const onScroll = () => {
      setShowTopWave(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const rotateSlides = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)

    return () => {
      clearInterval(rotateSlides)
    }
  }, [slides.length, SLIDE_INTERVAL_MS])

  const orderedPreviewIndexes = slides.map((_, offset) => (activeSlide + offset) % slides.length)

  return (
    <section id="home" className="home">
      <div className="left-home">
        <h1>
          hi, i'm polanch<br />
          <span>full-stack software developer <img src={heart} alt="Heart icon" className="heart-icon" /></span>
        </h1>
        <p className="hero-subheading">
          Like a perfectly brewed cup of coffee, I create digital experiences that blend warmth, simplicity, and craftsmanship, delivering designs that feel inviting while remaining clean, modern, and professional.
        </p>

        <div className="hero-ctas">
          <a href="/blog" className="hero-btn primary">Visit my blog</a>
        </div>

        <div className="hero-socials" aria-label="social links">
          <a href="https://github.com/Polanch" className="social-link" aria-label="Github">
            <img src={social1} alt="Github icon" />
          </a>
          <a href="https://www.instagram.com/elm.polanch/" className="social-link" aria-label="Instagram">
            <img src={social2} alt="Instagram icon" />
          </a>
          <a href="mailto:johnlloydolipani@gmail.com" className="social-link" aria-label="Mail">
            <img src={social3} alt="Mail icon" />
          </a>
          <a href="https://www.facebook.com/lm.olipani/" className="social-link" aria-label="Facebook">
            <img src={social4} alt="Facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/john-lloyd-olipani-bb2996290/" className="social-link" aria-label="LinkedIn">
            <img src={social5} alt="LinkedIn icon" />
          </a>
        </div>
        <img src={termo} alt="Thermometer icon" className="thermo-icon" />
      </div>
      <div className="right-home">
        <div className="mockup-card">
          <span className="mockup-chip">
            Now building
            <span className="loading-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
          <img
            key={`hero-${activeSlide}`}
            src={slides[activeSlide].image}
            alt={slides[activeSlide].alt}
            className="hero hero-swap"
          />
          <div className="mockup-footer" key={`footer-${activeSlide}`}>
            <p>{slides[activeSlide].leftText}</p>
            <span>{slides[activeSlide].rightText}</span>
          </div>
        </div>
        <div className="preview-rail" key={`rail-${activeSlide}`} aria-label="image previews">
          {orderedPreviewIndexes.map((slideIndex) => {
            const slide = slides[slideIndex]
            const isActive = slideIndex === activeSlide

            return (
            <button
              key={`preview-${slideIndex}`}
              className={`preview-thumb ${isActive ? 'is-active' : ''}`}
              type="button"
              aria-label={`Show slide ${slideIndex + 1}`}
              onClick={() => setActiveSlide(slideIndex)}
            >
              <img src={slide.image} alt={slide.alt} />
            </button>
            )
          })}
        </div>
      </div>
      <div className={`homewave1 ${showTopWave ? 'is-visible' : ''}`} aria-hidden="true"/>
    </section>
  )
}

export default Home