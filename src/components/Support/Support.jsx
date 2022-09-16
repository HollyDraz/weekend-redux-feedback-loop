//page 3 support 
import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Support = () => {
 
    const history = useHistory();
    
    const support = useSelector( store => store.support); //getter
    const dispatch = useDispatch();

    //next a dispatch 
    const handleChange = (event) => {
        dispatch({type: 'SET_SUPPORT', payload: event.target.value })
    }
 return (
    <>
    <div>
        <h3>How supported do you feel?</h3>
        <input value={support} onChange ={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/comments')} className="button">Next</button>
    </div>

    </>
 )

    

 }


export default Support;



