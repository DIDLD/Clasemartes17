//importar los componentes necesarios para el manejo 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from "./Components/Menu"
import Contact from "./Components/Contact"
import Login from "./Components/Login"
import Us from "./Components/Us"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    
    <>

      <Router>
        <Routes>
          <Route path="/" element = {<Menu></Menu>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element = {<Login></Login>}></Route>
          <Route path="/us" element = {<Us></Us>}></Route>
        </Routes>
      </Router>
    </>
    
    
  )
}

export default App