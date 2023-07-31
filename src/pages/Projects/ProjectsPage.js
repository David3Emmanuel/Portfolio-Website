import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./ProjectsPage.css";

export default function ProjectsPage() {
    const DUMMY_PROJECTS = []

    return <div className="projects">
        {DUMMY_PROJECTS.length === 0 && <h2 className="empty">No projects yet...</h2>}
        {DUMMY_PROJECTS.map((project, i) => {
            return <Project key={i} {...project} />
        })}
    </div>
}

function Project({ name, description, image, id }) {
    return <Link className="project-link" to={`/${id}`}><Card className="project">
        <img src={image} alt={name} />
        <h2 className="center-text">{name}</h2>
        <p>{description}</p>
    </Card></Link>
}