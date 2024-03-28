import { Link } from "react-router-dom";

const MidumeCardLayout = ({ link, label, labelLink, text, textBtn }) => {
    return (
        <div className="text-center border border-primary p-6 rounded-md">
            <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                <h3 className="font-euclid text-primary text-lg font-semibold">
                    {label}
                </h3>
                <Link
                    href={`/${link}`}
                    className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                    {labelLink}
                </Link>
            </div>
            <div className="bg-[#f6f9fe] rounded-md p-6">
                <p className="text-primary text-center text-base">{text}</p>
                <button className="bg-secondary border-2 border-transparent text-white text-sm rounded-full mt-3 px-5 pt-[10px] pb-[9px] btn-box-shahow hover:bg-white hover:border-2 hover:border-[#f49831] hover:text-secondary transition-all ease-in-out duration-300">
                    {textBtn}
                </button>
            </div>
        </div>
    );
};

export default MidumeCardLayout;
