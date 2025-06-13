import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-3 px-4 flex flex-wrap items-center justify-between mb-8">
    <Link href="/" className="font-bold text-lg text-blue-700 dark:text-blue-300 tracking-tight">Prompt Engineering</Link>
    <div className="flex flex-wrap gap-4 text-sm sm:text-base">
      <Link href="/learning-1" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">Learning 1</Link>
      <Link href="/learning-2" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">Learning 2</Link>
      <Link href="/learning-3" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">Learning 3</Link>
      <Link href="/learning-4" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">Learning 4</Link>
      <Link href="/learning-5" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">Learning 5</Link>
    </div>
  </nav>
);

export default Navbar;
