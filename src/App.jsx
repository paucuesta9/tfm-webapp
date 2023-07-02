import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import BridgeBox from './components/BridgeBox'
import { Web3Provider } from './context/Web3Context'

function App () {
  return (
    <Web3Provider>
      <Header />
      <BridgeBox />
      <Footer />
    </Web3Provider>
  )
}

export default App
