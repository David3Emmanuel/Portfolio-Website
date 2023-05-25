import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

export default function Root({children}) {
    return <div className="root">
        <Header />
        <main>
            { children || <Outlet /> }
        </main>
        <footer></footer>
    </div>
}