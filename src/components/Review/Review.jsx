// page that displays all the data submitted so far 
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Review = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    //all our previous data/submissions

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector( store => store.understanding); 
    const support = useSelector( store => store.feeling);
    const comments= useSelector( store => store.feeling);


    //add the data together on one page to review
    const handleReview = () => {
        axios({
            method: 'POST',
            url: '/',
            data: {
                feeling,
                understanding,
                support,
                comments,
            },
        }).then((response) => {
            // Clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to the Activity Log
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }

 




    
    return (
        <>
            <h3>Review</h3>
            <div>
                <ul>
                    Feelings: {feeling}
                    <br/>
                    Understanding: {understanding}
                    <br/>
                    Support: {support}
                    <br/>
                    Comments: {comments}
                </ul>
             <button  className="button">Submit</button>
            </div>
        </>
    );

}




export default Review;