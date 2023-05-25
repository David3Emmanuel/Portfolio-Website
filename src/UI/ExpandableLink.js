import Link from "./Link";
import "./ExpandableLink.css";

export default function ExpandableLink({ className, to, icon, alt, description }) {
    let formattedClass = "expandable"
    if (className) formattedClass += " " + className
    if (!description) {
        if (to.startsWith("https://")) description = to.substring(8)
        else if (to.startsWith("http://")) description = to.substring(7)
        else if (to.startsWith("mailto:")) description = to.match(/[A-Za-z\d.]+@[A-Za-z]+\.[A-Za-z]+/)[0]
    }
    return <Link className={formattedClass} to={to}>
        <img className="icon" src={icon} alt={alt || icon} />
        <p className="drawer">{description || to}</p>
    </Link>
}