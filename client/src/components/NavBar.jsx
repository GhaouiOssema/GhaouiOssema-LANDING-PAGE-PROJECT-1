import { useState } from "react";
import { menuItems } from "../utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { OrdersModal } from ".";

const Navbar = ({ isOpen, setIsOpen }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <OrdersModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="mt-5 absolute w-full z-20 top-0 start-0 px-5 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 rounded-xl bg-white">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                            className="h-8"
                            alt="Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                            Logo
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center bg-gradient-to-br from-violet-600 to-indigo-600">
                            view orders
                        </button>
                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden transform transition-transform ${
                                isSidebarOpen ? "rotate-90" : "rotate-0"
                            }`}
                            aria-controls="navbar-sticky"
                            aria-expanded={isSidebarOpen ? "true" : "false"}>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {isSidebarOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            isSidebarOpen ? "block" : "hidden"
                        } md:block w-full md:w-auto md:order-1`}
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1,
                                    }}>
                                    <Link
                                        to={`/${item.href}`}
                                        className="block py-2 px-3 text-gray-700 rounded md:bg-transparent hover:text-blue-700 md:p-0"
                                        aria-current="page">
                                        {item.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;
