import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Loader, NavBar, StarsCanvas } from "./components";
import { Home, FAQ, NFCTags, HowItWorks, NFCBusinessCards } from "./pages";
import { useEffect, useState } from "react";
import InternalSideBard from "./components/InternalSideBard";

function App() {
    const [showLoader, setShowLoader] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [productCount, setProductCount] = useState(0);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
                    <div className="w-full relative z-0 bg-white">
                        <div className="flex flex-col ">
                            <div className="w-full">
                                <NavBar />
                            </div>
                            <div>
                                <InternalSideBard
                                    open={open}
                                    setOpen={setOpen}
                                />
                            </div>
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
                        {/* <StarsCanvas /> */}
                        {/* <Footer /> */}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
