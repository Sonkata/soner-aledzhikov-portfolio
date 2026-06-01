import { Link } from "react-router";

function Contact() {
    return (
        <section className="page-section contact-page">
            <div className="section-heading">
                <p className="section-label">Contact</p>

                <h1>Let’s connect</h1>

                <p>
                    Here are the main places where you can find my projects or
                    contact me about front-end work.
                </p>
            </div>

            <div className="contact-grid">
                <article className="contact-card">
                    <h2>GitHub</h2>

                    <p>
                        View my repositories, project code and front-end learning
                        progress.
                    </p>

                    <a
                        href="https://github.com/Sonkata"
                        target="_blank"
                        rel="noreferrer"
                        className="primary-btn"
                    >
                        Open GitHub
                    </a>
                </article>

                <article className="contact-card">
                    <h2>Projects</h2>

                    <p>
                        Browse the projects I have built with HTML, CSS,
                        JavaScript and React.
                    </p>

                    <Link to="/projects" className="primary-btn">
                        View Projects
                    </Link>
                </article>

                <article className="contact-card">
                    <h2>Email</h2>

                    <p>
                        Email me for collaboration opportunities or just to say hello!
                    </p>

                    <a
                        href="mailto:salecikov@gmail.com"
                        className="secondary-btn"
                    >
                        Send Email
                    </a>
                </article>
            </div>
        </section>
    );
}

export default Contact;