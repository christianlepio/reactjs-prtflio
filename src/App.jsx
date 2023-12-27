import { useEffect, useState } from 'react'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import LoadingPage from './components/LoadingPage'
import MyExperience from './components/MyExperience'
import Projects from './components/Projects'
import SayHi from './components/SayHi'
import ScrollButton from './components/ScrollButton'
//context provider
import { ThemeProvider } from './context/ThemeProvider'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500);
  }, [])

  useEffect(() => {
    !isLoading 
      ? AOS.init() 
      : null
  }, [isLoading])

  return (
      <ThemeProvider>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Header />
            <main className='mx-3'>
              <div className="container-fluid">
                <ScrollButton />
                <Home />
                <MyExperience />
                <Projects />
                <AboutMe />
                <SayHi />
              </div>
            </main>
            <Footer />
          </>
        )}
      </ThemeProvider>
  )
}

export default App
