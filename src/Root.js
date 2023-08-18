import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

import "./shared/Footer.css";

export default function Root({children}) {
    return <>
        <Header />
        <main>
            { children || <Outlet /> }
        </main>
    </>
}