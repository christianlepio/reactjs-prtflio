import Header from './components/Header'
import Home from './components/Home'
import viteLogo from '/vite.svg' //this is from public folder

function App() {

  return (
    <>
      <Header />
      <main className='mx-3'>
        <div className="container-fluid">
          <Home />
        </div>
      </main>
    </>
  )
}

export default App
