function About() {
    return (
        <section className="page-section about-page">
            <div className="section-heading">
                <p className="section-label">About Me</p>

                <h1>Project-based front-end learning</h1>

                <p>
                    I am learning front-end development by building real projects,
                    improving them step by step and publishing them online.
                </p>
            </div>

            <div className="about-layout">
                <div className="about-content">
                    <h2>Who I am</h2>

                    <p>
                        I am focused on becoming a front-end developer by practicing
                        HTML, CSS, JavaScript and React through real, deployed projects.
                    </p>

                    <p>
                        My approach is practical. I do not want to only watch tutorials.
                        I want to understand how components, pages, state, forms,
                        routing, APIs and responsive layouts work by actually building them.
                    </p>

                    <p>
                        So far, I have built landing pages, clone layouts, React practice
                        apps and portfolio-ready React projects.
                    </p>
                </div>

                <div className="about-highlights">
                    <article>
                        <strong>4+</strong>
                        <span>Completed Projects</span>
                    </article>

                    <article>
                        <strong>React</strong>
                        <span>Current Focus</span>
                    </article>

                    <article>
                        <strong>GitHub</strong>
                        <span>Project Deployment</span>
                    </article>
                </div>
            </div>

            <div className="learning-section">
                <h2>What I am practicing</h2>

                <div className="learning-grid">
                    <article>
                        <h3>Structure</h3>
                        <p>Semantic HTML, reusable components and clean page layouts.</p>
                    </article>

                    <article>
                        <h3>Styling</h3>
                        <p>Responsive CSS, grids, cards, spacing, hover effects and UI polish.</p>
                    </article>

                    <article>
                        <h3>Interactivity</h3>
                        <p>JavaScript logic, forms, validation, filters, search and localStorage.</p>
                    </article>

                    <article>
                        <h3>React</h3>
                        <p>Components, props, state, routing, API fetching and project structure.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default About;