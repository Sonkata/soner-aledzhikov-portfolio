import { Link } from "react-router";

function Hero() {
    return (
        <section className="hero">
            <p className="hero-label">Front-End Developer</p>

            <h1>
                Hi, I’m Soner.
                <span>I build modern front-end projects.</span>
            </h1>

            <p className="hero-description">
                I am learning front-end development by building real projects
                with HTML, CSS, JavaScript and React.
            </p>

            <div className="hero-actions">
                <Link to="/projects" className="primary-btn">
                    View Projects
                </Link>

                <Link to="/contact" className="secondary-btn">
                    Contact Me
                </Link>
            </div>
        </section>
    );
}

export default Hero;