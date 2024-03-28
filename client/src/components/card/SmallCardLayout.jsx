const SmallCardLayout = ({ title, text }) => {
    return (
        <div className="text-center border border-primary p-6 rounded-md">
            <h3 className="text-secondary text-[32px] font-semibold leading-none">
                {title}
            </h3>
            <p className="text-primary text-sm font-medium">{text}</p>
        </div>
    );
};

export default SmallCardLayout;
