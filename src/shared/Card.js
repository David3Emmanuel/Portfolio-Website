import "./Card.css"

export default function Card({ children, className, hidden }) {
    let formattedClass = "card"
    if (className) formattedClass += " " + className
    return <div className={formattedClass}>
        {children}
    </div>
}