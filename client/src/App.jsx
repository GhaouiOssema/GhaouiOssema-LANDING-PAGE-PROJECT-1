import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
    Footer,
    InternalSideBarLeft,
    Loader,
    NavBar,
    StarsCanvas,
    InternalSideBarRight,
} from "./components";

import {
    Home,
    FAQ,
    NFCTags,
    HowItWorks,
    NFCBusinessCards,
    Dashboard,
} from "./pages";
import { useEffect, useState } from "react";

function App() {
    const [open, setOpen] = useState(false);

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust this threshold as needed
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full relative z-0 bg-white">
            <div className="flex flex-col ">
                <div className="w-full">
                    <NavBar open={open} setOpen={setOpen} />
                </div>
                <div className="flex">
                    {isMobileView ? (
                        <div className="fixed right-0 overflow-y-auto z-10 h-full">
                            <InternalSideBarRight
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>
                    ) : (
                        <InternalSideBarLeft open={open} setOpen={setOpen} />
                    )}
                    <div className="w-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/plaques-nfc" element={<NFCTags />} />
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
                </div>
            </div>
            {/* <div className=" h-screen" /> */}

            {/* <StarsCanvas /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
