import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./ProjectsPage.css";

const PROJECTS = [
    {
        name: "School Arena",
        description: "Multiplayer tournament for high school students.\nLearn and practice by competing with others from around the world in all high school subjects.",
        image: "/alterok-lab1.png",
        url: "https://schoolarena.vercel.app"
    },
    {
        name: "Hairs by Solomon",
        description: "I made an e-commerce website for a friend of mine complete with database, authentication, and storage.",
        image: "https://hairsbysolomon.vercel.app/logo-colored.jpeg",
        url: "https://hairsbysolomon.vercel.app"
    },
    {
        name: "TicTacToe Demo",
        description: "Made with Processing for Java",
        image: "/TicTacToe.jpeg",
        url: "https://github.com/David3Emmanuel/tictactoe"
    },
]

export default function ProjectsPage() {
    return <div className="projects-page">
        {PROJECTS.length === 0 && <h2 className="empty">No projects yet...</h2>}
        {PROJECTS.length === 1 && <h3 className="center-text">One project</h3>}
        {PROJECTS.length > 1 && <h3 className="center-text">{PROJECTS.length} projects</h3>}
        <div className="projects">
            {PROJECTS.map((project, i) => {
                return <Project key={i} {...project} />
            })}
        </div>
    </div>
}

function Project({ name, description, image, url }) {
    return <Link className="project-link" to={url}><Card className="project">
        <img src={image} alt={name} />
        <h2 className="center-text">{name}</h2>
        {description.split("\n").map(line => <p>{line}</p>)}
    </Card></Link>
}