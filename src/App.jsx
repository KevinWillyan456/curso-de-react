import { Conteiner } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./pages/Home"
import './styles/globalStyle.css'

function App() {

  return (
    // Fragment React <></>
    <>
      <Conteiner>
        <Home />
        <NavMenu />
      </Conteiner>
    </>
  )
}

export default App
