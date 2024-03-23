import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react"; // Import Transition from headlessui
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
            <Transition
                show={showLoader}
                enter="transition-opacity duration-500"
                enterFrom="opacity-100"
                enterTo="opacity-0"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-0"
                leaveTo="opacity-100"
            >
                <Loader />
            </Transition>
            <Transition
                show={!showLoader}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="w-full max-w-screen-xl">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/faq" element={<FAQ />} />
                        {/* Define other routes */}
                    </Routes>
                    <Footer />
                </div>
            </Transition>
        </div>
    );
}

export default App;