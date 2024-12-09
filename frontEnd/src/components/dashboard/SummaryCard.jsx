import PropTypes from "prop-types";

const SummaryCard = ({icon, text, number, color}) => {
    return (
        <div className = "rounded flex bg-white">
            <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
                {icon}
            </div>
            <div className = "pl-4 py-1">
                <p className = "text-lg font-semibold">{text}</p>
                <p className = "text-xl font-bold">{number}</p>
            </div>
        </div>
    )
}

SummaryCard.propTypes = {
    icon: PropTypes.node.isRequired, // Ensures 'icon' is a valid React node (e.g., JSX, string, or component)
    text: PropTypes.string.isRequired, // Ensures 'text' is a string
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allows 'number' to be string or number
    color: PropTypes.string.isRequired, // Ensures 'color' is a string (e.g., class names like 'bg-blue-500')
};

export default SummaryCard