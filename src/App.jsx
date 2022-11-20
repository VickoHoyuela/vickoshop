import Navbar from "./components/navbar/Navbar"
import Categorys from "./components/categorys/Categorys"
import Wrapper from "./components/products/Wrapper"
import NavHeader from "./components/navbar/NavHeader"
import "./app.css"

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Navbar />
      <Categorys />
      <Wrapper />
    </div>
  )
}

export default App
