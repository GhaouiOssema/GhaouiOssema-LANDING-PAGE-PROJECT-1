import React from "react";

const Dashboard = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-3 pt-8 pb-32 sm:px-8 sm:pt-8 sm:pb-32 md:p-8 ">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center border border-primary p-6 rounded-md">
                    <h3 className="text-secondary text-[32px] font-semibold leading-none">
                        0
                    </h3>
                    <p className="text-primary text-sm font-medium">
                        VOS ENVOIS EN COURS DE LIVRAISON
                    </p>
                </div>
                <div className="text-center border border-primary p-6 rounded-md">
                    <h3 className="text-secondary text-[32px] font-semibold leading-none">
                        0
                    </h3>
                    <p className="text-primary text-sm font-medium">
                        VOS TRANSPORTS EN COURS DE LIVRAISON
                    </p>
                </div>
                <div className="text-center border border-primary p-6 rounded-md">
                    <h3 className="text-secondary text-[32px] font-semibold leading-none">
                        0 €
                    </h3>
                    <p className="text-primary text-sm font-medium">
                        GAGNÉ EN JUILLET 2023
                    </p>
                </div>
                <div className="text-center border border-primary p-6 rounded-md">
                    <h3 className="text-secondary text-[32px] font-semibold leading-none">
                        0 €
                    </h3>
                    <p className="text-primary text-sm font-medium">
                        GAGNÉ EN 2023
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-6">
                <div className="col-span-6 lg:col-span-4 ">
                    <div className="text-center border border-primary p-6 rounded-md mb-6">
                        <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                            <h3 className="font-euclid text-primary text-base font-semibold sm:text-lg">
                                Mes annonces en cours de livraison
                            </h3>
                            <a
                                href="/"
                                className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                Voir toutes mes annonces
                            </a>
                        </div>
                        <div className="bg-[#f6f9fe] rounded-md p-6">
                            <p className="text-primary text-center text-base">
                                Aucune annonce en cours
                            </p>
                            <button className="bg-secondary border-2 border-transparent text-white text-sm rounded-full mt-3 px-5 pt-[10px] pb-[9px] btn-box-shahow hover:bg-white hover:border-2 hover:border-[#f49831] hover:text-secondary transition-all ease-in-out duration-300">
                                Ajouter une annonce
                            </button>
                        </div>
                    </div>
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
                            <div className="bg-boxprimary w-[84px] h-[84px] rounded-full mt-3 mb-4 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    height="46"
                                    width="46"
                                    fill="#f49831">
                                    <g>
                                        <path d="M12 12c-3.308 0-6-2.692-6-6 0-1.051.278-2.087.805-2.997l.009-.017A6.029 6.029 0 0112 0c3.308 0 6 2.692 6 6s-2.692 6-6 6zM7.731 4.587A4.437 4.437 0 007.5 6c0 2.481 2.019 4.5 4.5 4.5a4.507 4.507 0 004.487-4.154 9.448 9.448 0 01-2.727.404h-.02a9.588 9.588 0 01-6.009-2.163zm.724-1.355a8.042 8.042 0 005.293 2.018c.887 0 1.757-.146 2.592-.434A4.51 4.51 0 0012 1.5c-1.39 0-2.693.642-3.545 1.732zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="text-primary text-base font-semibold">
                                Lhnsjwtnf Emltmp
                            </p>
                            <p className="text-primary text-sm">Particulier</p>
                            <ul className="mt-3">
                                <li className="flex items-center gap-2 mb-[10px]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="18"
                                        width="18"
                                        fill="#00C9B7">
                                        <g>
                                            <path d="M9.325 17.916a1.79 1.79 0 01-1.498-.799l-2.44-3.462a.75.75 0 011.227-.864l2.45 3.477a.306.306 0 00.261.148.294.294 0 00.236-.119l7.852-9.935a.75.75 0 011.175.93l-7.843 9.923a1.781 1.781 0 01-.423.396 1.78 1.78 0 01-.997.305z"></path>
                                            <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"></path>
                                        </g>
                                    </svg>
                                    <span className="text-sm">
                                        Téléphone vérifié
                                    </span>
                                </li>
                                <li className="flex items-center gap-2 mb-[10px]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="18"
                                        width="18"
                                        fill="#E76450">
                                        <g>
                                            <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"></path>
                                            <path d="M16.5 17.249a.743.743 0 01-.53-.22L12 13.06l-3.97 3.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3.97-3.97-3.97-3.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.97 3.97 3.97-3.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.97 3.97 3.97 3.97a.752.752 0 010 1.061.746.746 0 01-.53.219z"></path>
                                        </g>
                                    </svg>
                                    <span className="text-sm text-[#e76450]">
                                        Email non vérifié
                                    </span>
                                </li>
                                <li className="flex items-center gap-2 mb-[10px]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="18"
                                        width="18"
                                        fill="#E76450">
                                        <g>
                                            <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"></path>
                                            <path d="M16.5 17.249a.743.743 0 01-.53-.22L12 13.06l-3.97 3.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3.97-3.97-3.97-3.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.97 3.97 3.97-3.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.97 3.97 3.97 3.97a.752.752 0 010 1.061.746.746 0 01-.53.219z"></path>
                                        </g>
                                    </svg>
                                    <span className="text-sm text-[#e76450]">
                                        Pièce d&apos;identité non vérifiée
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="/"
                                className="text-primary underline text-sm mt-4 hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                Voir mon profil public
                            </a>
                        </div>
                    </div>
                    <div className="text-center border border-primary p-6 rounded-md">
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
