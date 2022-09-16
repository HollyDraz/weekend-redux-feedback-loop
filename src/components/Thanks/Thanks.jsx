import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Thanks = () => {
    const history = useHistory();
 return (
    <>
    <div>
        <h3>Thanks for you feedback</h3>
        <button onClick={() => history.push('/')} className="button">Submit Feedback again</button>
    </div>

    </>
 )

    

 }




export default Thanks;