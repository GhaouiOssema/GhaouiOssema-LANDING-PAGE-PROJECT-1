import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Loader, NavBar, StarsCanvas } from "./components";
import { Home, FAQ, NFCTags, HowItWorks, NFCBusinessCards } from "./pages";
import { useEffect, useState } from "react";

function App() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="bg-black">
            {showLoader ? (
                <Loader />
            ) : (
                <>
                    <div className="w-full relative z-0 bg-primary">
                        <div>
                            <NavBar />
                        </div>
                        {/* <div className=" h-screen" /> */}
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route
                                    path="/plaques-nfc"
                                    element={<NFCTags />}
                                />
                                <Route
                                    path="/comment-ca-marche"
                                    element={<HowItWorks />}
                                />
                                <Route
                                    path="/cartes-de-visite-nfc"
                                    element={<NFCBusinessCards />}
                                />
                            </Routes>
                        </div>
                        <StarsCanvas />
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
