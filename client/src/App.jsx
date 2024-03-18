import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, NavBar, StarsCanvas } from "./components";
import { Home, FAQ, NFCTags, HowItWorks, NFCBusinessCards } from "./pages";

function App() {
    return (
        <div className="w-full relative z-0 bg-primary">
            <div>
                <NavBar />
            </div>
            {/* <div className=" h-screen" /> */}
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/plaques-nfc" element={<NFCTags />} />
                    <Route path="/comment-ca-marche" element={<HowItWorks />} />
                    <Route
                        path="/cartes-de-visite-nfc"
                        element={<NFCBusinessCards />}
                    />
                </Routes>
            </div>
            <StarsCanvas />
            <Footer />
        </div>
    );
}

export default App;
