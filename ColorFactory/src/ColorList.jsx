import { Link } from "react-router-dom";
import "./ColorList.css"

const ColorList = ({colors}) => {
    return (
        <div className="ColorList">
            <div className="ColorList-header">
                <h1>Welcome to the Color Factory.</h1>
                <h2>
                    <Link to="/colors/new">Add a New Color</Link>
                </h2>
                <div>
                    {colors.map(({color}) => (
                        <Link className="ColorList-link" key={color} to={`/colors/${color}`}>{color}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorList;