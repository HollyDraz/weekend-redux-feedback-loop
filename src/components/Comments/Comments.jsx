//page 4 comments page 
import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Comments = () => {
 
    const history = useHistory();
    
    const comments= useSelector( store => store.comments); //getter
    const dispatch = useDispatch();

   
    const handleChange = (event) => {
        dispatch({type: 'SET_COMMENTS', payload: event.target.value })
    }
 return (
    <>
    <div>
        <h3>Any Comments you'd like to leave?</h3>
        <input value={comments} onChange ={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/review')} className="button">Next</button>
    </div>

    </>
 )

    

 }


export default Comments;




