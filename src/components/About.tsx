import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who am I?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&#39;m a passionate MERN Stack Developer with expertise in building full-stack web applications. 
              With a strong foundation in MongoDB, Express.js, React, and Node.js, I create efficient, 
              scalable, and user-friendly solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in modern JavaScript frameworks and have a keen eye for detail. 
              My approach combines technical excellence with creative problem-solving to deliver 
              exceptional digital experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I&#39;m not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="/tahir.png"
                alt="Muhammad Tahir"
                width={256}
                height={256}
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}