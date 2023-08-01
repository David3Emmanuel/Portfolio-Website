import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default function Root({children}) {
    return <div className="root">
        <Header />
        <main>
            { children || <Outlet /> }
        </main>
        <Footer />
    </div>
}