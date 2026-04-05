import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Institute Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/college_logo_no_background.webp" alt="CMSIL" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tighter">CMSIL Institute</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Plot 12, Engineering Sector, Dhaka-1212. <br />
            Advancing knowledge through Mind and Hand (Mens et Manus).
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition">f</div>
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-blue-400 cursor-pointer transition">in</div>
          </div>
        </div>

        {/* Column 2: Student Services */}
        <div>
          <h4 className="font-bold text-blue-400 mb-6 uppercase text-xs tracking-widest">Student Portal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/notice" className="hover:text-white transition">Academic Calendar</Link></li>
            <li><Link href="/admission-calculator" className="hover:text-white transition">Admission Eligibility</Link></li>
            <li><Link href="/login" className="hover:text-white transition">Attendance Tracker</Link></li>
            <li><Link href="/policy" className="hover:text-white transition">Library Rules</Link></li>
          </ul>
        </div>

        {/* Column 3: University Links */}
        <div>
          <h4 className="font-bold text-blue-400 mb-6 uppercase text-xs tracking-widest">Institute</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/faculty" className="hover:text-white transition">Faculty Directory</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Mission & Vision</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Help Desk</Link></li>
            <li><Link href="/policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Location Map Placeholder */}
        <div>
          <h4 className="font-bold text-blue-400 mb-6 uppercase text-xs tracking-widest">Location Map</h4>
          <div className="w-full h-32 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-[10px] text-gray-500 italic text-center px-4 uppercase">Google Maps API Integration Pending</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
        <p>© 2026 CMSIL Institute. All Rights Reserved.</p>
        <p>Developed & Maintained by Group-D (Head of Admin)</p>
      </div>
    </footer>
  );
};

export default Footer;