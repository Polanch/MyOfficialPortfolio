import Header from '../components/Header'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'
import About from '../components/About'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default Homepage