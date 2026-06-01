import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
    return (
        <main className="app">
            <ScrollToTop />

            <Navbar />

            <Outlet />

            <Footer />
        </main>
    );
}

export default Layout;