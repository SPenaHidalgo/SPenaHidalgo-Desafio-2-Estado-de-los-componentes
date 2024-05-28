import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Registro from './components/Registro'
import Alert from './components/Alert'
import Footer from './components/Footer/Footer'
import './App.css'

function App () {
  <Header />
  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false
  })

  const addAlert = (newAlert) => {
    setAlert(newAlert)
  }

  return (
    <>
      <Header />
      <Registro onAlert={addAlert} />
      <Alert alerta={alert} />
      <Footer />
    </>
  )
}

export default App
