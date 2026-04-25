import { Outlet, Link } from "react-router-dom";
import { Coffee, MapPin, Search } from "lucide-react";
import { motion } from "motion/react";

export function Layout() {
  const currentDate = new Date().toLocaleDateString("en-MY", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Newspaper Top Header */}
      <header className="border-b-[3px] border-kopi-dark border-opacity-20 pb-4 pt-6 px-4 md:px-8 max-w-4xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <Link to="/" className="hover:opacity-80 transition-opacity flex flex-col items-center">
            <span className="font-display uppercase tracking-[0.2em] text-xs text-kaya-green font-bold mb-1">
              Start your day with kopi and news.
            </span>
            <div className="flex items-center gap-2 text-kopi-dark">
              <Coffee className="w-8 h-8" />
              <h1 className="font-serif text-5xl md:text-6xl font-black uppercase tracking-tighter">
                KOPI PRESS
              </h1>
            </div>
          </Link>
        </div>

        {/* Date and Weather Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-kopi-dark border-opacity-15 py-2 font-display text-[11px] uppercase tracking-widest text-kopi-dark/70">
          <div>{currentDate}</div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0 font-bold">
            <span>Editor's Pick</span>
            <span className="bg-kopi-dark w-1 h-1 rounded-full"></span>
            <span>Est. 2026</span>
          </div>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            <MapPin className="w-3 h-3" />
            <span>Kuala Lumpur, 31°C</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-4xl mx-auto p-4 md:p-8 relative z-10">
        <div className="bg-paper-yellow bg-opacity-60 rounded-sm p-4 md:p-8 newspaper-edge relative">
          {/* Subtle coffee stain */}
          <div className="coffee-stain top-12 -right-8 opacity-40"></div>
          <div className="coffee-stain bottom-32 -left-12 opacity-30 transform -rotate-45 scale-75"></div>
          
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-kopi-dark border-opacity-20 py-8 px-4 text-center text-kopi-dark/60 font-body text-sm max-w-4xl mx-auto w-full relative z-10">
        <p className="mb-2 font-serif italic text-lg">"Thank you for reading the Kopi Press."</p>
        <div className="flex justify-center gap-6 font-display uppercase text-xs tracking-wider font-bold mb-4">
          <Link to="/" className="hover:text-gula-amber transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gula-amber transition-colors">About</Link>
          <a href="#" className="hover:text-gula-amber transition-colors">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Kopi Press Publications. All beans reserved.</p>
      </footer>
    </div>
  );
}
