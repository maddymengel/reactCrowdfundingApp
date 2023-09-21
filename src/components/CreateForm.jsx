import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postProject from "../api/post-project";
import useAuth from "../hooks/use-auth.js";

function CreateForm () {
    const navigate = useNavigate();
    // const {auth, setAuth} = useAuth();

    //we are not passing is open and date, because user should not control them unless they have permissons
    const [projectDetails, setProjectDetails] = useState ({
        title: "title",
        description: "description",
        goal: "goal",
        image: "image",
        //true: "is_open",
        //date: "date_created",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectDetails((prevProjectDetails) => ({
            ...prevProjectDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("create button pressed")
            postProject(
                projectDetails.title,
                projectDetails.description,
                projectDetails.goal,
                projectDetails.image,
            ).then((response) => {
       console.log("RESPONSE FROM POST REQ: ", response)
              //  navigate("/");
            });
    };


    return (
        <form>
            <div>
                <label htmlFor="text">Title of project:</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Enter title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="text">Description:</label>
                <input 
                    type="text" 
                    id="description" 
                    placeholder="Enter a short description"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="number">Goal amount:</label>
                <input 
                    type="number" 
                    id="goal" 
                    placeholder="Enter your goal amount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Attach image:</label>
                <input 
                    type="URL" 
                    id="image" 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit} >Create</button>
        </form>
    );
}

export default CreateForm;