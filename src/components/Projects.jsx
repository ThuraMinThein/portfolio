import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        // {
        //     title: "DailyList",
        //     description: "A task management app built with Flutter.",
        //     image: "/dailylist-preview.jpg", // Add your image path
        //     technologies: ["Flutter", "Dart", "Firebase"],
        //     demo: "https://dailylist.com", // Add your demo link
        //     github: "https://github.com/ThuraMinThein/DailyList",
        // },
        // {
        //     title: "Physics Spot",
        //     description: "An educational platform for learning physics concepts.",
        //     image: "/physics-spot-preview.jpg", // Add your image path
        //     technologies: ["React", "Node.js", "MongoDB"],
        //     demo: "https://physics-spot.com", // Add your demo link
        //     github: "https://github.com/ThuraMinThein/Physics-Spot",
        // },
        {
            title: "Dream Book",
            description: "A website where people can read and create books",
            image: "", // Add your image path
            technologies: ["NestJs", "PostgreSQL", "Cloudinary", "ReactJs", "tailwind"],
            demo: "https://dream-book-dev.vercel.app", // Add your demo link
            github: "https://github.com/ThuraMinThein/dream-book-backend",
        },
        {
            title: "TCU",
            description: "Chat web application,people can chat with their friends and post the best Quotes",
            image: "", // Add your image path
            technologies: ["React", "Node.js", "PostgreSQL", "NestJs"],
            demo: "https://tcu-to-communicate-with-you.vercel.app", // Add your demo link
            github: "https://github.com/ThuraMinThein/tcu-backend",
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