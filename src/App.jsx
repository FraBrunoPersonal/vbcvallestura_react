import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar.jsx";
import Direttivo from "./pages/Direttivo.jsx";
import Storia from "./pages/Storia.jsx";
import Contatti from "./pages/Contatti.jsx";
import Squadre from "./pages/Squadre.jsx";
import News from "./pages/News.jsx";
import StraValEsturo from "./pages/StraValEsturo.jsx";
import StaffTecnico from "./pages/StaffTecnico.jsx";
import Footer from "./pages/Footer.jsx";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/storia" element={<Storia />} />
                    <Route path="/direttivo" element={<Direttivo />} />
                    <Route path="/staffTecnico" element={<StaffTecnico />} />
                    <Route path="/stravalesturo" element={<StraValEsturo />} />
                    <Route path="/squadre" element={<Squadre />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contatti" element={<Contatti />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
