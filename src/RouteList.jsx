import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ColorList from './ColorList';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm';
import NotFound from './NotFound';

/** RouteList Component
 * 
 * This component is responsible for rendering the routes for the application.
 * 
 * Props:
 * - colors: an array of strings representing the colors in the list
 * - addColor: a function that adds a color to the list
 * 
 * State: none
 */
const RouteList = ({colors, addColor}) => {
    // Render
    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors}/>} />
            <Route path='/colors/:color' element={<ColorPage />}/>
            <Route path='/colors/new' element={<ColorForm addColor={addColor}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};

export default RouteList;