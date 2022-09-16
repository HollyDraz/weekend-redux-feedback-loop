import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
// page two understanding 


const Understanding = () => {
    //add history to go to next page 
    const history = useHistory();
    const understanding = useSelector( store => store.understanding); 
    const dispatch = useDispatch();

    //next a dispatch 
    const handleChange = (event) => {
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value })
    }
 return (
    <>
    <div>
        <h3>How is your understanding?</h3>
        <input value={understanding} onChange ={handleChange} className="input" type="text" />
        <button onClick={() => history.push()} className="button">Next</button>
    </div>

    </>
 )

    

 }


export default Understanding;