import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/** ColorList
 * 
 * This component is responsible for rendering the list of colors that when clicked bring you to the associated color page and a button that when clicked goest to the /colors/new route.
 * 
 * Props: none
 * 
 * State:
 * - colors: an array of objects representing the colors in the list
 */
const ColorList = ({ colors }) => {

    // Render
    return (
        <div className='ColorList'>
            <h1 className='ColorList-title'>Welcome to the Color Factory</h1>

            <Link to='/colors/new'>
                <button className='ColorList-btn'>Add New Color!</button>
            </Link>

            <ul className='ColorList-list'>
                {colors.map(color => (
                    <li key={color}>
                        <Link to={`/colors/${color}`}>
                            {color}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ColorList;