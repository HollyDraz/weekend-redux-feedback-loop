import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

//import { useHistory } from 'react-router-dom';
 const Feeling = () => {
    //add history to go to next page 
    const history = useHistory();
    //set up selctor and dispatch 
    const feeling = useSelector( store => store.feeling); //getter
    const dispatch = useDispatch();

    //next a dispatch 
    const handleChange = (event) => {
        dispatch({type: 'SET_FEELING', payload: event.target.value })
    }
 return (
    <>
    <div>
        <h3>How are you feeling?</h3>
        <input value={feeling} onChange ={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/understanding')} className="button">Next</button>
    </div>

    </>
 )

    

 }


export default Feeling;