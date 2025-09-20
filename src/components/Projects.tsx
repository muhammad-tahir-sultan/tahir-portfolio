import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Multani Mango - E-Commerce Web App ",
            description: "A full-featured e-commerce platform built with MERN stack, including user authentication, product management, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express JS", "Redux"],
            demoLink: "https://multanimango.vercel.app/",
            sourceLink: "https://github.com/tahir-sigmadevelopers/multanimango",
            image: "/multani-mango-ecommerce-website-mern.png"
        },
        {
            id: 2,
            title: "Mobi-Commerce  An Online Mobile Selling Platform",
            description: "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
            technologies: ["React", "Express", "Node JS", "MongoDB", "Redux Toolkit", "Authentication", "Stripe Payment", "Admin Panel"],
            demoLink: "https://mobimarketplace.vercel.app/",
            sourceLink: "https://github.com/tahir-sigmadevelopers/frontend-mobiMarketPlace-fyp",
            image: "/mobi-commerce-an-online-mobile-shop-platform.png"
        },
        {
            id: 3,
            title: "An Ecommerce Service Provider Agency",
            description: "A social media analytics dashboard that aggregates data from multiple platforms and provides insights through visualizations.",
            technologies: ["React", "Express JS", "Node.js", "MongoDB"],
            demoLink: "https://kesefpartners.com/",
            sourceLink: "https://github.com/tahir-sigmadevelopers/Mux-Ecommerce---A-Portfolio-Website-for-Ecommerce-Business",
            image: "/mern-stack-ecommece-agency-website.png"
        },
    ];



    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto pt-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href={project.sourceLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}