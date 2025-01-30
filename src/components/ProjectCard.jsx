import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm z-0" />

            <div className="relative z-10 p-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-4">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        View Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        demo: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;