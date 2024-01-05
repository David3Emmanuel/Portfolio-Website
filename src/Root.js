import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

import "./shared/Footer.css";

export default function Root({children}) {
    return <>
        <Header />
        <main>

            <h3>Exciting Changes Ahead! 🚀</h3>
            <p>This site is being revamped for a fresh look and enhanced user experience. The new site will be live in a few weeks. Thanks for your patience!</p>
            <p>- David Emmanuel</p>
            { children || <Outlet /> }
        </main>
    </>
}