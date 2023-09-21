async function postProject(title, description, goal, image) {
    // is this getting the right date?
    let date = new Date().toJSON();
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");
    console.log("i am post project")

    const response = await fetch(url, {
        method: "POST", // We neeed to tell the server that we are sending JSON data so we set the COntent Type header to application/json
        headers: {
            "Content-Type": "application/json",
            // authentication/authorization
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,
            // user does not control - we define directly here and send straight to backend
            "is_open": true,
            // user does not control
            "date_created": date,
        }),
    });

    if (!response.ok) { // error handling
        const fallbackError = `Error trying to post project`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postProject;