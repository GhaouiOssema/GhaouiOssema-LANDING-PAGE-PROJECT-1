import React, { useEffect, useState } from "react";
import { carouselTitle, data1 } from "../utils/DashboardData";
import {
    Carousel,
    MidumeCardLayout,
    NotificationCard,
    SmallCardLayout,
} from "../components";

const Dashboard = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [activeTab, setActiveTab] = useState("deliveries");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth < 1024 ? (
                <div className="w-full mx-auto px-5">
                    {carouselTitle?.map((elem, idx) => (
                        <Carousel key={idx} title={elem} />
                    ))}
                    <div className="grid max-w-xl mx-auto px-3 border border-primary rounded-md mt-5 mb-5">
                        <div className="text-center p-6">
                            <div className="mb-15px flex items-center justify-around">
                                <h3
                                    className={`font-euclid text-primary text-sm font-semibold cursor-pointer ${
                                        activeTab === "deliveries"
                                            ? "text-blue-500"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleTabClick("deliveries")
                                    }>
                                    Mes Livraisons
                                </h3>
                                <h3 className="font-euclid text-primary text-sm font-semibold">
                                    |{" "}
                                </h3>
                                <h3
                                    className={`font-euclid text-primary text-sm font-semibold cursor-pointer ${
                                        activeTab === "announcements"
                                            ? "text-blue-500"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleTabClick("announcements")
                                    }>
                                    Mes annonces
                                </h3>
                            </div>
                            <div className="">
                                {activeTab === "deliveries" && (
                                    <MidumeCardLayout
                                        link="#"
                                        label="Mes Livraisons en cours"
                                        labelLink="Voir toutes mes livraisons"
                                        text="Aucune livraison en cours"
                                        textBtn="Rechercher un colis"
                                        type="mobile"
                                    />
                                )}
                                {activeTab === "announcements" && (
                                    <MidumeCardLayout
                                        link="#"
                                        label="Mes annonces en cours"
                                        labelLink="Voir toutes mes annonces"
                                        text="Aucune annonce en cours"
                                        textBtn="Ajouter une annonce"
                                        type="mobile"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-[1280px] mx-auto px-3 pb-32 sm:px-8  sm:pb-32 pt-10">
                    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {data1.map((elem, idx) => (
                            <SmallCardLayout
                                key={idx}
                                title={elem.title}
                                text={elem.text}
                            />
                        ))}
                        <div className="text-center border border-primary rounded-md p-4 md:p-5">
                            <div className="mb-3 md:mb-4 flex flex-col md:flex-row justify-between items-center">
                                <h3 className="font-euclid text-primary text-lg font-semibold">
                                    Mon Profil
                                </h3>
                                <a
                                    href="/"
                                    className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                    Modifier
                                </a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-primary text-base font-semibold">
                                    Lhnsjwtnf Emltmp
                                </p>
                                <p className="text-primary text-sm">
                                    Particulier
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6 mt-6">
                        <div className="col-span-6 lg:col-span-4">
                            <div className="text-center border border-primary p-6 rounded-md">
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mes Livraisons en cours
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir toutes mes livraisons
                                    </a>
                                </div>
                                <div className="bg-[#f6f9fe] rounded-md p-6">
                                    <p className="text-primary text-center text-base">
                                        Aucune livraison en cours
                                    </p>
                                    <button className="bg-secondary border-2 border-transparent text-white text-sm rounded-full mt-3 px-5 pt-[10px] pb-[9px] btn-box-shahow hover:bg-white hover:border-2 hover:border-[#f49831] hover:text-secondary transition-all ease-in-out duration-300">
                                        Rechercher un colis
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-2">
                            <div className="text-center border border-primary p-6 rounded-md mb-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mes alertes trajet
                                    </h3>
                                    <a
                                        href="/"
                                        className="primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir tout
                                    </a>
                                </div>
                            </div>
                            <div className="text-center border border-primary p-6 rounded-md">
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-primary text-base font-semibold">
                                        Lhnsjwtnf Emltmp
                                    </p>
                                    <p className="text-primary text-sm">
                                        Particulier
                                    </p>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm mt-4 hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir mon profil public
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
