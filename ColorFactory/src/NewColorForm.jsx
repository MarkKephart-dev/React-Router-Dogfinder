import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({addColor}) => {
    const initialState = {
        color: "",
        value: "black"
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const { color, value } = formData;

    const handleSubmit = e => {
        e.preventDefault();
        addColor({color, value});
        navigate('/colors');
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color Name: </label>
                <input 
                    type="text"
                    id="color"
                    name="color"
                    placeholder="color name"
                    value={color}
                    onChange={handleChange}
                />
                <label htmlFor="value">Pick a Color: </label>
                <input
                    id="value"
                    type="color" 
                    name="value" 
                    value={value}
                    onChange={handleChange}
                />
                <button>Add this color</button>
            </form>
        </div>
    );
};

export default NewColorForm;