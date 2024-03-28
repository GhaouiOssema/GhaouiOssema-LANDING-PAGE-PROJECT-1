const SmallCardLayout = ({ title, text }) => {
    return (
        <div className="text-center border border-primary p-6 rounded-md flex items-center justify-between">
            <p className="text-primary text-sm font-medium mr-2 w-[50%] text-start ">{text} :</p>
            <h3 className="text-secondary text-[32px] font-semibold leading-none">
                {title}
            </h3>
        </div>
    );
};

export default SmallCardLayout;
