import { useParams, Link, Navigate } from "react-router-dom";

const ColorDetail = ({colors}) => {
    const {color}= useParams();
    const colorDetail = colors.find(c => c.color.toLowerCase() === color.toLowerCase());

    if (!colorDetail) {
        return <Navigate to="/colors" />;
    }

    return (
        <div>
            <h2 style={{color: colorDetail.value}}>
                This is {colorDetail.color}!
            </h2>
            <h4>
                <Link to="/colors">Go Back</Link>
            </h4>
        </div>
    )
}

export default ColorDetail;