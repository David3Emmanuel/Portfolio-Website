import Link from "../UI/Link";

import "./Footer.css";

export default function Footer() {
    return <footer>
        <section>
            <h3>SITEMAP</h3>
            <p><Link to="/">Home Page</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/blog">Blog Posts</Link></p>
        </section>
        <section>
            <h3>Contact Me:</h3>
            <ul>
                <p><img src="/gmail.ico" alt="Email" /><Link to="mailto: david3emmanuel@gmail.com">david3emmanuel@gmail.com</Link></p>
                <p><img src="/github2.ico" alt="Github" /><Link to="https://github.com/David3Emmanuel">GitHub</Link></p>
                <p><img src="/whatsapp.ico" alt="Whatsapp" /><Link to="https://wa.me/2347012117811">Phone: +234 7012117811</Link></p>
                <p><img src="/linkedin.ico" alt="Linkedin" /><Link to="https://linkedin.com/David3Emmanuel">LinkedIn</Link></p>
                <p><img src="/twitter.ico" alt="Twitter" /><Link to="https://twitter.com/David3Emmanuel">Twitter</Link></p>
            </ul>
        </section>
    </footer>
}