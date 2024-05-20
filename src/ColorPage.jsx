import React from 'react';
import { useParams } from 'react-router-dom';

/** ColorPage Component
 * 
 * This component renders a color page depending on the color that is passed in the URL.
 * 
 * Props: none
 * 
 * State: none
 */
const ColorPage = () => {
    const { color } = useParams();

    // Render
    return (
        <div className='ColorPage' style={{ backgroundColor: color }}>
            <h1>This is the {color} page!</h1>
        </div>
    );
};

export default ColorPage;