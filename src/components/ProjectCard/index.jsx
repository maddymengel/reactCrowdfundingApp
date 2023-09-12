import { Link } from 'react-router-dom'
import './styles.css'

import ProjectCard from './components/ProjectCard'

function ProjectCard(props) {
    const {project} = props;

    return (
        <div className="project-card">
            <Link to='/project'>
                <h1>{props.project.title}</h1>
                <img src={props.project.image} />
            </Link>
        </div>
    )
}

export default ProjectCard