import { useState } from "react";
import { data1 } from "../utils/DashboardData";
import SmallCardLayout from "./card/SmallCardLayout";
import ProfileCard from "./card/ProfileCard";

const Carousel = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid max-w-xl mx-auto w-full">
            <div className="py-5 border-b border-black">
                <details className={`group ${isOpen ? "open" : ""}`}>
                    <summary
                        className="flex justify-between items-center font-medium cursor-pointer list-none"
                        onClick={() => setIsOpen((prev) => !prev)}>
                        <span>
                            {title === "Mon Profile" ? (
                                <div className="flex items-center">
                                    <img
                                        className="w-12 h-12 rounded-full mr-3"
                                        src="https://loremflickr.com/320/320/girl"
                                        alt="jane"
                                    />
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Jane doe
                                        </a>
                                        <p>Blogger &amp; Youtuber</p>
                                    </div>
                                </div>
                            ) : (
                                title
                            )}
                        </span>
                        <span className="transition group-open:rotate-180">
                            <svg
                                fill="none"
                                height="24"
                                shape-rendering="geometricPrecision"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div
                        className={`mt-5 transition-opacity duration-500  ${
                            isOpen ? "opacity-100" : "opacity-0"
                        }`}>
                        {title === "Mon Profile" ? (
                            <ProfileCard />
                        ) : title === "Mon Solde" ? (
                            <SmallCardLayout title="0" text={"Euro"} />
                        ) : title === "Mes Statistiques" ? (
                            <div className="grid gap-4 md:gap-6 grid-cols-1">
                                {data1.map((elem, idx) => (
                                    <SmallCardLayout
                                        key={idx}
                                        title={elem.title}
                                        text={elem.text}
                                    />
                                ))}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-5"></div>
                </details>
            </div>
        </div>
    );
};

export default Carousel;
