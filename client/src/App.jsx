import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Footer, Loader, NavBar, StarsCanvas } from "./components";
import { Home, FAQ, NFCTags, HowItWorks, NFCBusinessCards } from "./pages";

function App() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <motion.div
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: showLoader ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Loader />
            </motion.div>
            <motion.div
                className="w-full max-w-screen-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: showLoader ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/nfc-tags" element={<NFCTags />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/nfc-business-cards" element={<NFCBusinessCards />} />
                    {/* Define other routes */}
                </Routes>
<StarsCanvas />
                <Footer />
            </motion.div>
        </div>
    );
}

export default App;