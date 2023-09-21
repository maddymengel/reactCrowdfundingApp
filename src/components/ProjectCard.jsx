import { Link } from "react-router-dom";
import "./ProjectCard.css";
import DeleteProjectButton from "./DeleteProjectButton";

function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `project/${projectData.id}`;
    
    return (
        <div className="project-card">
            <Link to={projectLink}>
                <img src={projectData.image} />
                <DeleteProjectButton 
                                id={projectData.id}
                                onClick={() => props.onClick(projectData.id)}
                        />  
                <h3>{projectData.title}</h3>      
            </Link>    
        </div>  
    );
}

export default ProjectCard;