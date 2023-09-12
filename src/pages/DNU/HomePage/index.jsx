import ProjectCard from "../../../components/ProjectCard"
import { allProjects } from "../data"
import './styles.css'

import 

function HomePage() {
    return (
        <div id="project-list">
            {
                allProjects.map((project, index) => {
                    return <ProjectCard project={project} key={index} />
                })
            }
        </div>
    )
}

export default HomePage