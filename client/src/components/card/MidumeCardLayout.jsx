const MidumeCardLayout = ({ title, text }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {text}
            </p>
        </div>
    );
};

export default MidumeCardLayout;
