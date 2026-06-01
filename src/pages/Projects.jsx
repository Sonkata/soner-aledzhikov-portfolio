import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";

function Projects() {
    return (
        <section className="page-section projects-page">
            <div className="section-heading">
                <p className="section-label">Projects</p>

                <h1>My Front-End Projects</h1>

                <p>
                    A collection of my completed projects built with HTML, CSS,
                    JavaScript, React, React Router and modern front-end tools.
                </p>
            </div>

            <ProjectList projects={projects} />
        </section>
    );
}

export default Projects;