import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
        <section className="projects-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </section>
    );
}

export default ProjectList;