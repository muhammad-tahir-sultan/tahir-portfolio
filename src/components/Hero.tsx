import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/tahir.png"
              alt="Muhammad Tahir"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Muhammad Tahir
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
          MERN Stack Developer
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
          I build modern, responsive web applications using the MERN stack. 
          Passionate about creating efficient and scalable solutions with MongoDB, Express, React, and Node.js.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a 
            href="/Muhammad_Tahir_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}