/* import dependencies*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*import components*/
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

/*import pages*/
import Home from "./pages/home/home"
import ReservaHoras from "./pages/reservaHoras/reservaHoras"
import Nosotros from "./pages/nosotros/nosotros"
import Contacto from "./pages/contacto/contacto"
import Psicologos from "./pages/psicologos/psicologos"
import NotFound from "./pages/notFound/notFound"

/* import context*/
import { CitasProvider } from "./context/CitasContext";
import { PsicologosProvider } from "./context/PsicologosContext";
function App() {

  return (
    <BrowserRouter>
      <CitasProvider>
        <PsicologosProvider>
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/reservarHora" element={<ReservaHoras />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/psicologos" element={<Psicologos />} />
            <Route path="/contacto" element={<Contacto />} />

          </Routes>
          <Footer />
        </PsicologosProvider>
      </CitasProvider>
    </BrowserRouter>
  )
}

export default App
