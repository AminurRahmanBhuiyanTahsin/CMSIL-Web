import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Project Name from Proposal */}
        <div className="font-bold text-xl">
          <Link href="/">CMSIL</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-blue-300">About</Link>
          <Link href="/faculty" className="hover:text-blue-300">Faculty</Link>
          <Link href="/notice" className="hover:text-blue-300">Notice</Link>
          <Link href="/admission-calculator" className="hover:text-blue-300">Admission</Link>
          <Link href="/help-desk" className="hover:text-blue-300">Help Desk</Link>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
          
          {/* Login Button - Milestone 3 */}
          <Link href="/login" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;