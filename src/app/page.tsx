import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex flex-col gap-8 items-center w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8 py-8">
        <section className="w-full flex flex-col items-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 text-center drop-shadow-lg">
            Prompt Engineering Learning Hub
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-6">
            Master the art of prompt engineering with hands-on modules, expert
            strategies, and the latest innovations. Start your journey below!
          </p>
        </section>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link
            href="/learning-1"
            className="group block bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-blue-100 dark:border-gray-800 p-6 h-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300 group-hover:text-blue-700">
              Learning 1: Basics of Prompt Creation
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Start your journey with the fundamentals of prompt engineering and
              effective prompt design.
            </p>
          </Link>
          <Link
            href="/learning-2"
            className="group block bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-blue-100 dark:border-gray-800 p-6 h-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300 group-hover:text-blue-700">
              Learning 2: Techniques & Strategies
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Explore proven techniques and strategies to craft powerful prompts
              for various AI models.
            </p>
          </Link>
          <Link
            href="/learning-3"
            className="group block bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-blue-100 dark:border-gray-800 p-6 h-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300 group-hover:text-blue-700">
              Learning 3: Techniques & Strategies (Expanded)
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Dive deeper into advanced strategies and real-world prompt
              engineering scenarios.
            </p>
          </Link>
          <Link
            href="/learning-4"
            className="group block bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-blue-100 dark:border-gray-800 p-6 h-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300 group-hover:text-blue-700">
              Learning 4: Advanced Topics
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Master complex prompt structures, multimodal prompts, and ethical
              considerations.
            </p>
          </Link>
          <Link
            href="/learning-5"
            className="group block bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-blue-100 dark:border-gray-800 p-6 h-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300 group-hover:text-blue-700">
              Learning 5: Latest Research & Innovations
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Stay ahead with the latest research, innovations, and future trends
              in prompt engineering.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
