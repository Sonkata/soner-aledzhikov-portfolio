import { Link } from "react-router";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <h2>Soner.dev</h2>

                <p>
                    Front-end portfolio built with React, Vite and React Router.
                </p>
            </div>

            <div className="footer-links">
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <a
                    href="https://github.com/Sonkata"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;