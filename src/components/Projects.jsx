import ProjectCard from './ProjectCard';
import tcu from "../img/tcu.png";
import dreamBook from "../img/dream-book.png";

const Projects = () => {
    const projects = [
        {
            title: "Dream Book",
            description: "A website where people can read and create books",
            image: dreamBook,
            technologies: ["NestJs", "PostgreSQL", "Cloudinary", "ReactJs", "tailwind"],
            demo: "https://dream-book-dev.vercel.app",
            github: "https://github.com/ThuraMinThein/dream_book_backend",
        },
        {
            title: "TCU",
            description: "Chat web application,people can chat with their friends and post the best Quotes",
            image: tcu, // Add your image path
            technologies: ["React", "Node.js", "PostgreSQL", "NestJs"],
            demo: "https://tcu-to-communicate-with-you.vercel.app",
            github: "https://github.com/ThuraMinThein/TCU_backend",
        },
        {
            title: "DailyList",
            description: "A task management app built with Flutter.",
            technologies: ["Java", "Swing", "MySQL"],
            github: "https://github.com/ThuraMinThein/DailyList",
        },
        {
            title: "Physics Spot",
            description: "An educational platform for learning physics concepts app built with Flutter.",
            technologies: ["Flutter", "Dart"],
            github: "https://github.com/ThuraMinThein/Physics-Spot",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        My Projects
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;