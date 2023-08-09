import Link from "../../UI/Link";
import Card from "../../shared/Card";
import Slideshow from "../../shared/Slideshow";
import ExpandableLink from "../../UI/ExpandableLink";

import "./HomePage.css";

export default function HomePage() {
    return <div className="home">
        <div className="info">
            <h3>Hi, I'm David!</h3>
            <p>I am a young web developer from Lagos, Nigeria. I began my development journey as a hobbyist but I'm now looking forward to working with clients who want to build web apps.</p>
            <p>Reach out to me on my social media handles and check out my latest projects <Link to="/projects">here</Link>.</p>
            <div className="contact-me">
                <ExpandableLink to="mailto: david3emmanuel@gmail.com" icon="/gmail.ico" alt="Email" />
                <ExpandableLink to="https://github.com/David3Emmanuel" icon="/github.ico" alt="Github" />
                <ExpandableLink to="https://wa.me/2347012117811" description="+234 7012117811" icon="/whatsapp.ico" alt="Whatsapp" />
                <ExpandableLink to="https://linkedin.com/David3Emmanuel" icon="/linkedin.ico" alt="Linkedin" />
                <ExpandableLink to="https://twitter.com/David3Emmanuel" icon="/twitter.ico" alt="Twitter" />
            </div>
        </div>
        <aside>
            <h3 className="center-text">MY SKILLS</h3>
            <Slideshow className="skills-slideshow">
                <Card className="skill-card">
                    <h3>WEB</h3>
                    <p>I can design Progressive Web Apps using the 3 basic web languages as well as a MERN stack</p>
                    <Card className="skill-list"><ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li className="last">Javascript</li>
                        <li className="first">MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul></Card>
                </Card>
                <Card className="skill-card">
                    <h3>Machine Learning and AI</h3>
                    <p>Using mainly Python, I can practicalize concepts such as neural networks, game AI, image recognition, and so on with or without the use of ML frameworks</p>
                    <Card className="skill-list"><ul>
                        <li>Python</li>
                        <li>Tensorflow</li>
                        <li>Scikit-Learn</li>
                    </ul></Card>
                </Card>
                <Card className="skill-card">
                    <h3>Game Dev</h3>
                    <p>I can create cool-looking 3D games with Unity and 2D games with Pygame or Processing</p>
                    <Card className="skill-list"><ul>
                        <li>Unity</li>
                        <li className="last">C#</li>
                        <li className="first">Python</li>
                        <li className="last">Pygame</li>
                        <li className="first">JAVA</li>
                        <li>Processing IDE</li>
                    </ul></Card>
                </Card>
                <Card className="skill-card">
                    <h3>Desktop Apps</h3>
                    <p>I can create simple desktop apps using python or processing</p>
                    <Card className="skill-list"><ul>
                        <li>Python</li>
                        <li className="last">Tkinter</li>
                        <li className="first">Processing IDE</li>
                    </ul></Card>
                </Card>
            </Slideshow>
        </aside>
    </div>
}