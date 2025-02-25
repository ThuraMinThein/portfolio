import {
    SiNestjs,
    SiDocker,
    SiReact,
    SiTypeorm,
    SiMysql,
    SiPostgresql,
    SiExpress,
    SiSpring,
    SiPrisma,
    SiGraphql,
    // SiTypescript,
    // SiGithub,
    // SiGit,
    // SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "NestJS", icon: <SiNestjs className="w-12 h-12" /> },
        { name: "ExpressJS", icon: <SiExpress className="w-12 h-12" /> },
        { name: "Spring", icon: <SiSpring className="w-12 h-12" /> },
        { name: "React", icon: <SiReact className="w-12 h-12" /> },
        { name: "MySQL", icon: <SiMysql className="w-12 h-12" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12" /> },
        { name: "TypeORM", icon: <SiTypeorm className="w-12 h-12" /> },
        { name: "PrismaORM", icon: <SiPrisma className="w-12 h-12" /> },
        { name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
        { name: "Graphql", icon: <SiGraphql className="w-12 h-12" /> },
        // { name: "Typescript", icon: <SiTypescript className="w-12 h-12" /> },
        // { name: "Git", icon: <SiGit className="w-12 h-12" /> },
        // { name: "GitHub", icon: <SiGithub className="w-12 h-12" /> },
        // { name: "Postman", icon: <SiPostman className="w-12 h-12" /> },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Skills
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="skill-card"
                        >
                            <div className="text-primary mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-medium text-text">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;