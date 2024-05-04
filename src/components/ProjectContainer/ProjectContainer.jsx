import { GitHub } from "@mui/icons-material";
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
    return (
        <div className="project p-8 my-0 mx-auto text-center hover:-translate-y-2">
            <h3 className="font-bold">{project.title}</h3>
            <p className="mt-4">{project.description}</p>
            <div className="flex flex-wrap justify-center my-5 mx-0">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="m-2 font-medium text-sm text-zinc-600"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <a href={project.sourceCode} aria-label="source code" className="link link--icon text-zinc-600" target="_blank">
                <GitHub />
            </a>
            <a href={project.livePreview} aria-label="live preview" className="link link--icon text-zinc-600 ml-4" target="_blank">
                <RocketLaunchRoundedIcon />
            </a>
        </div>
    )
}

export default ProjectContainer;