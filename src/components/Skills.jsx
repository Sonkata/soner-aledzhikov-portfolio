import { skills } from "../data/skills";

function Skills() {
    return (
        <section className="skills-section">
            <div className="section-heading">
                <p className="section-label">Skills</p>

                <h2>Technologies I’m learning and using</h2>

                <p>
                    These are the main front-end tools and concepts I have practiced
                    through real projects.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article key={skill.id} className="skill-card">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;