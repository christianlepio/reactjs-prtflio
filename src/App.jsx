import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import MyExperience from './components/MyExperience'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <main className='mx-3'>
        <div className="container-fluid">
          <Home />
          <MyExperience />
          <Projects />
          <AboutMe />
        </div>
      </main>
    </>
  )
}

export default App
