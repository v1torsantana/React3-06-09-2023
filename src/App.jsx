import {} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Exemplo1 from './Exemplo1'
import Error from './Error'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
function App() {
  
  return (
    <>
      <BrowserRouter>
      {/*Chamando o componente Nav*/}
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Exemplo1" element={<Exemplo1/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
