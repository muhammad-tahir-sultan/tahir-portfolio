export default function Experience() {
    const experiences = [

        {
            id: 3,
            title: "Internship in MERN Stack",
            company: "MaxCore Solutions - Gulghast, Multan",
            period: "September 2022 - December 2022",
            description: "Built and maintained websites for practice. Gained experience in both frontend and backend development.",
        },
        {
            id: 2,
            title: "MERN Stack Developer",
            company: "Hashtag Web - Royal Orchard, Multan",
            period: "October 2023 - February 2024",
            description: "Developed and maintained RESTful APIs and frontend components for client projects. Collaborated with UX/UI designers to implement responsive interfaces. Collaborated with other developers on MERN stack projects for performing CRUD (Create, Read, Update, Delete) operations.",
        },
        {
            id: 1,
            title: "MERN Stack Developer",
            company: "Self-Learning and Local Projects",
            period: "February 2024 - Present",
            description: "Developed some projects for friends and local businesses using MERN stack. Gained experience in both frontend and backend development.",
        },

    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 pb-12 border-l-2 border-blue-600 dark:border-blue-400">
                            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md ml-4">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}