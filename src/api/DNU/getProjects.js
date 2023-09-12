async function getProjects() {
// define the url I should get the projects from
    const url = '${import.meta.env.VITE_API_URL}/projects'

// get the projects from that url
    const response = fetch(url, { method: 'GET '})

// check if the projects are good, did the get request work?
    if (response.ok) {
        const fallbackError = "Error fetching projects";

        const data = await (await response).json().catch(() => )
        (await response).json()
    }

// return the projects


} 

export default getProjects