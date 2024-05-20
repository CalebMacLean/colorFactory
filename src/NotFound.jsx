import react from 'react';
import { useNavigate } from 'react-router-dom';

/** NotFound Component 
 * 
 * This component navigates the user back to the home page if they try to access a route that does not exist.
 * 
 * Props: none
 * 
 * State: none
 */
const NotFound = () => {
    const navigate = useNavigate();
    navigate('/colors', { replace: true });
}

export default NotFound;