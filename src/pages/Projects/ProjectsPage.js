import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./ProjectsPage.css";

export default function ProjectsPage() {
    const DUMMY_PROJECTS = [
        {
            "name": "School Arena",
            "description": "How intelligent are you? Climb up the ranks by challenging scholars from all around the world",
            "image": "/twitter.ico",
            "id": "school-arena"
        },
        {
            "name": "Chess All-In-One",
            "description": "Want to go deeper into chess? This project is a complete compilation of all tools you could possibly need for chess analysis, practice, and so much more!",
            "image": "/github.ico",
            "id": "school-arena"
        }
    ]

    return <div className="projects">
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