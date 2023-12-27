import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import MyExperience from './components/MyExperience'
import Projects from './components/Projects'
import SayHi from './components/SayHi'
//context provider
import ThemeProvider from './context/ThemeProvider'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <main className='mx-3'>
          <div className="container-fluid">
            <Home />
            <MyExperience />
            <Projects />
            <AboutMe />
            <SayHi />
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
