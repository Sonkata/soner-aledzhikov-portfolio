function ProjectCard({
    title,
    category,
    description,
    technologies,
    liveUrl,
    githubUrl
}) {
    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-category">{category}</span>
            </div>

            <h2>{title}</h2>

            <p>{description}</p>

            <div className="tech-list">
                {technologies.map((technology) => (
                    <span key={technology} className="tech-badge">
                        {technology}
                    </span>
                ))}
            </div>

            <div className="project-links">
                <a href={liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                </a>

                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;