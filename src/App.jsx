import { Conteiner } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./components/pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/globalStyle.css'
import { MovieDetails } from "./components/pages/MovieDetails"

function App() {

  return (
    // Fragment React <></>
    <>
    <BrowserRouter>
      <Conteiner>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie-details" element={<MovieDetails />}/>
      </Routes>
        <NavMenu />
      </Conteiner>
    </BrowserRouter>
    </>
  )
}

export default App
