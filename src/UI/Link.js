import { Link, NavLink } from "react-router-dom";

export default function _Link({to, title, className, children, nav}) {
    if (!to || to.match(/.+\..+/)) {
        return <a rel="noreferrer" target="_blank" className={className} title={title} href={to || '/'}>{children}</a>
    }  else {
        if (nav) return <NavLink className={className} title={title} to={to}>{children}</NavLink>
        else return <Link className={className} title={title} to={to}>{children}</Link>
    }
}