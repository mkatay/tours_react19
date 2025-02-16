import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Tours } from './components/Tours'
import {Loading} from './components/Loading'

function App() {

  return (

   <div className="flex flex-col h-screen">
      <Header/>
      <Tours/>
      <Footer/>
    </div>

  )
}

export default App
