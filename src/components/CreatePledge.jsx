import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postPledge from "../api/post-pledge";
import useAuth from "../hooks/use-auth.js";

function CreatePledge () {
    const navigate = useNavigate();
    // const {auth, setAuth} = useAuth();

    //we are not passing is open and date, because user should not control them unless they have permissons
    const [pledgeDetails, setPledgeDetails] = useState ({
        supporter: "supporter",
        comment: "comment",
        amount: "amount",
        project: "project",
        // image: "image",
        //true: "is_open",
        //date: "date_created",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledgeDetails((prevPledgeDetails) => ({
            ...prevPledgeDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("create button pressed")
            postPledge(
                pledgeDetails.supporter,
                pledgeDetails.comment,
                pledgeDetails.amount,
            ).then((response) => {
    console.log("RESPONSE FROM POST REQ: ", response)
              //  navigate("/");
            });
    };


    return (
        <form>
            <div>
                <label htmlFor="text">Supporter:</label>
                <input 
                    type="text" 
                    id="supporter" 
                    placeholder="Enter name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="text">Comment:</label>
                <input 
                    type="text" 
                    id="comment" 
                    placeholder="Enter a short comment"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="number">Amount: $</label>
                <input 
                    type="number" 
                    id="amount" 
                    placeholder="Enter your amount"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit} >Pledge</button>
        </form>
    );
}

export default CreatePledge;