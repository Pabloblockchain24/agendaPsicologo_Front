/* import dependencies*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*import components*/
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <hr />

      <Home />
    </BrowserRouter>

  )
}

export default App
