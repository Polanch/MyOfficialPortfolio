import '../assets/styles/Footer.css'
import wave7 from '../assets/images/wave7.svg'
import logo from '../assets/images/logo.png'
import leftDeco from '../assets/images/left-foot-deco.png'
import rightDeco from '../assets/images/right-foot-deco.png'
import heart from '../assets/icons/heart3.png'
import plant from '../assets/icons/plant.png'
import stars from '../assets/icons/stars.png'
import cake from '../assets/icons/cake.png'
import donut from '../assets/icons/donut.png'
import pen from '../assets/icons/pen.png'
import cafe  from '../assets/icons/cafe.png'
import location from '../assets/icons/location.png'
import contact from '../assets/icons/contact.png'
import social1 from '../assets/icons/social1.png'
import social2 from '../assets/icons/social2.png'
import social3 from '../assets/icons/social3.png'
import social4 from '../assets/icons/social4.png'
import social5 from '../assets/icons/social5.png'
import reactlogo from '../assets/icons/react-logo.svg'
import springlogo from '../assets/icons/spring-logo.svg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
]

const socials = [
  { icon: social1, href: 'https://github.com/Polanch', alt: 'GitHub' },
  { icon: social2, href: 'https://www.instagram.com/elm.polanch/', alt: 'Instagram' },
  { icon: social3, href: 'mailto:johnlloydolipani@gmail.com', alt: 'Email' },
  { icon: social4, href: 'https://www.facebook.com/lm.olipani/', alt: 'Facebook' },
  { icon: social5, href: 'https://www.linkedin.com/in/john-lloyd-olipani-bb2996290/', alt: 'LinkedIn' },
]

const connects = [
  { icon: donut, label: 'johnlloydlipani@gmail.com', href: 'mailto:johnlloydlipani@gmail.com' },
  { icon: location,   label: 'Valenzuela City, Philippines',        href: 'https://www.google.com/maps/place/308+Marcelo+H.+Del+Pilar+St,+Manila,+Metro+Manila/@14.7179657,120.9540408,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b3962805e85d:0x410bb54d3cae3dc3!8m2!3d14.7179657!4d120.9566157!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D' },
  { icon: contact, label: "+63 908 3184 698", href: 'tel:+639083184698' },
]

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Wave SVG */}
        <img src={wave7} alt="" className="wave-bg" aria-hidden="true" />

        {/* Decorative images sitting on top of the wave */}
        <div className="footer-decos">
          <img src={leftDeco}  alt="" className="foot-deco foot-deco-left"  aria-hidden="true" />
          <img src={rightDeco} alt="" className="foot-deco foot-deco-right" aria-hidden="true" />
        </div>

        {/* Main footer content */}
        <div className="footer-body">

          {/* Col 1 — Brand */}
          <div className="footer-col footer-brand">
            <div className="footer-logo-row">
              <div className="logo">
                <img id="logo" src={logo} alt="Logo" />
                <a className="logo-title" href="#home" aria-label="Go to home">
                  polanch
                </a>
                <p>soft dev</p>
              </div>
            </div>
            <p className="footer-tagline">
              A full-stack developer who loves building clean, meaningful, and
              user-friendly digital experiences. Fueled by coffee and curiosity.{' '}
              <img src={cafe} alt="coffee" className="inline-icon" />
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="social-link" aria-label={s.alt}>
                  <img src={s.icon} alt={s.alt} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">
              Quick Links <img src={stars} alt="" className="heading-icon" aria-hidden="true" />
            </h4>
            <div className="footer-col-rule" />
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <img src={heart} alt="" className="link-heart" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Let's Connect */}
          <div className="footer-col">
            <h4 className="footer-col-heading">
              Let's Connect <img src={cake} alt="" className="heading-icon" aria-hidden="true" />
            </h4>
            <div className="footer-col-rule" />
            <ul className="footer-links">
              {connects.map((c, i) => (
                <li key={i}>
                  <a href={c.href} className="footer-link">
                    <img src={c.icon} alt="" className="connect-icon" aria-hidden="true" />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Stay in the loop */}
          <div className="footer-col">
            <h4 className="footer-col-heading">
              Stay in the loop <img src={pen} alt="" className="heading-icon" aria-hidden="true" />
            </h4>
            <div className="footer-col-rule" />
            <p className="footer-loop-text">
              Get updates on new projects, blogs, and more!
            </p>
            <div className="footer-email-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-email-input"
                aria-label="Email address"
              />
              <button type="button" className="footer-email-btn" aria-label="Subscribe">
                ➤
              </button>
            </div>
          </div>

        </div>

        {/* Divider with center icon */}
        <div className="footer-divider">
          <span className="divider-line" />
          <img src={plant} alt="" className="divider-icon" aria-hidden="true" />
          <span className="divider-line" />
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">Polanch © 2026  All rights reserved.</p>
          <p className="footer-made">
            Made with React{' '}
            <img src={reactlogo} alt="React" className="inline-icon" aria-hidden="true" />{' '}
            and Spring{' '}
            <img src={springlogo} alt="Spring" className="inline-icon" aria-hidden="true" />
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer