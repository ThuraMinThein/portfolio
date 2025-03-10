import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-surface/50 backdrop-blur-md border border-surface/10">
            <div className="relative z-10 p-6">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <h2 className="text-4xl md:text-4xl font-bold text-center my-20 bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
                        No Image
                    </h2>
                )}

                <h3 className="text-xl font-bold mb-2 text-text">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-primary/10 text-sm text-text bg-gradient-to-r from-indigo-600 to-indigo-600 text-transparent bg-clip-text"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-4">
                    {project.demo ? (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            View Demo
                        </a>
                    ) : (
                        <span className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg">Demo Not Available</span>
                    )}
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
        image: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        demo: PropTypes.string,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;