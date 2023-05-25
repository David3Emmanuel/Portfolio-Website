import { useState, useEffect } from "react";
import "./Slideshow.css";

const SLIDE_DELAY = 5; //Number of seconds

export default function Slideshow({ className, children }) {
    const [activeCard, setActiveCard] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard(prev => (prev + 1) % children.length)
        }, SLIDE_DELAY * 1000)
        return () => clearInterval(interval)
    }, [activeCard, children])

    let formattedClass = "slideshow"
    if (className) formattedClass += " " + className
    return <div className={formattedClass}>
        <div className="counter center">
            {children.map((child, i) => {
                return <Circle key={i} index={i} isActive={activeCard === i} setActive={setActiveCard} />
            })}
        </div>
        <div className="slide-container">
            {children.map((child, i) => {
                let positionClass;
                if (activeCard === i) {
                    positionClass = "current"
                } else if ((i + 1) % children.length === activeCard) {
                    positionClass = "before"
                } else if ((i + children.length - 1) % children.length === activeCard) {
                    positionClass = "after"
                } else {
                    positionClass = "unknown"
                }
                return <div key={i} className={`slide ${positionClass}`}>{child}</div>
            })}
        </div>
    </div>
}

function Circle({ index, isActive, setActive }) {
    let formattedClass = "circle " + (isActive ? "active" : "inactive")
    function handleClick() {
        setActive(index)
    }
    return <span className={formattedClass} onClick={handleClick}></span>
}