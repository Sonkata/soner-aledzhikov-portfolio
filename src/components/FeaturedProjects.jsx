import { Link } from "react-router";
import { projects } from "../data/projects";
import ProjectList from "./ProjectList";

function FeaturedProjects() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="featured-projects">
            <div className="section-heading">
                <p className="section-label">Featured Projects</p>

                <h2>Some of my recent front-end work</h2>

                <p>
                    A quick preview of the projects I have built while learning
                    HTML, CSS, JavaScript and React.
                </p>
            </div>

            <ProjectList projects={featuredProjects} />

            <div className="featured-actions">
                <Link to="/projects" className="primary-btn">
                    View All Projects
                </Link>
            </div>
        </section>
    );
}

export default FeaturedProjects;