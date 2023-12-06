export const StatCard = ({ title, value }) => {
    return (
        <div className="bg-gray-400 p-4 mx-4 w-40">
            <h5 className="text-3xl mb-3 text-indigo-600 font-bold">{value}</h5>
            <h6 className="text-xs text-gray-900">{title}</h6>
        </div>
    );
}