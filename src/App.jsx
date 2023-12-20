import Header from './components/Header'
import Home from './components/Home'
import MyExperience from './components/MyExperience'

function App() {

  return (
    <>
      <Header />
      <main className='mx-3'>
        <div className="container-fluid">
          <Home />
          <MyExperience />
        </div>
      </main>
    </>
  )
}

export default App
