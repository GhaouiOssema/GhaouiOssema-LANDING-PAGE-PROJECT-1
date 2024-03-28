import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
    Footer,
    InternalSideBarLeft,
    Loader,
    NavBar,
    StarsCanvas,
    InternalSideBarRight,
    BottomNavBar,
    IconBreadcrumbs,
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
            setIsMobileView(window.innerWidth <= 1024); // Adjust this threshold as needed
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
        <div className="w-full bg-white relative">
            <div className="flex flex-col">
                <div className="w-full">
                    <NavBar open={open} setOpen={setOpen} />
                </div>
                <div className="flex flex-1">
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
                    <div className="w-full overflow-y-auto my-2 py-auto">
                        <div className="w-full mx-auto px-5">
                            <div className="grid max-w-xl lg:max-w-[1220px] mx-auto px-3 border border-primary rounded-md">
                                <IconBreadcrumbs />
                            </div>
                        </div>
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
            {isMobileView && (
                <div className="">
                    <BottomNavBar />
                </div>
            )}
        </div>
    );
}

export default App;
