import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/** ColorForm Component 
 * 
 * This component renders a form for adding a new color to the list and return to the home page aftwerwards.
 * 
 * Props:
 * - addColor: a function that adds a color to the list
 * 
 * State:
 * - formData: an object representing the form data
 */
const ColorForm = ({ addColor }) => {
    // Hooks
    const [formData, setFormData] = useState({ color: '' });
    const navigate = useNavigate();

    // Handlers
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor(formData.color);
        setFormData({ color: '' });
        navigate('/colors');
    };

    // Render
    return (
        <div className='ColorForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Color:</label>
                <input
                    id='color'
                    name='color'
                    value={formData.color}
                    onChange={handleChange}
                />
                <button>Add Color</button>
            </form>
        </div>
    );
};

export default ColorForm;