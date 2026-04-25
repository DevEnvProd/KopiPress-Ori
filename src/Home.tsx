import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { articles, marketMamak, todayInHistory, kopiTalk, events } from "./data";
import { TrendingUp, TrendingDown, Clock, CalendarDays, Ticket } from "lucide-react";

export function Home() {
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <div className="flex justify-between items-end border-b-2 border-kopi-dark/10 pb-4">
        <h2 className="font-serif text-3xl font-bold italic text-kopi-dark">
          Selamat pagi, Malaysia!
        </h2>
        <span className="font-display text-xs uppercase tracking-widest font-bold text-gula-amber">
          The Morning Brief
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column - Main News */}
        <div className="md:col-span-8 flex flex-col gap-8">
          
          {/* Main Article */}
          <Link to={`/brief/${mainArticle.slug}`} className="group block">
            <article className="border-b-2 border-kopi-dark/10 pb-8">
              <span className="font-display text-[10px] uppercase font-bold tracking-widest text-kaya-green mb-2 block">
                {mainArticle.category}
              </span>
              <h3 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-4 group-hover:text-gula-amber transition-colors text-balance">
                {mainArticle.title}
              </h3>
              <p className="font-body text-lg leading-relaxed text-kopi-black/80 mb-4 text-balance">
                {mainArticle.summary}
              </p>
              <div className="flex items-center gap-1 font-display text-[10px] uppercase font-bold text-kopi-dark/60">
                <Clock className="w-3 h-3" />
                <span>{mainArticle.readTimeMin} min read</span>
              </div>
            </article>
          </Link>

          {/* Sub Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b-2 border-kopi-dark/10">
            {sideArticles.map((article) => (
              <Link key={article.id} to={`/brief/${article.slug}`} className="group block border-t-4 border-gula-amber pt-4 border-opacity-30">
                <span className="font-display text-[10px] uppercase font-bold tracking-widest text-kaya-green mb-2 block">
                  {article.category}
                </span>
                <h4 className="font-serif text-xl font-bold leading-snug mb-3 group-hover:text-gula-amber transition-colors text-balance">
                  {article.title}
                </h4>
                <p className="font-body text-sm leading-relaxed text-kopi-black/70 mb-3">
                  {article.summary}
                </p>
                <div className="flex items-center gap-1 font-display text-[10px] uppercase font-bold text-kopi-dark/50">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTimeMin} min read</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-susu-white border border-kopi-dark/10 p-6 rounded-tl-3xl rounded-br-3xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-5 h-5 text-gula-amber" />
              <h3 className="font-serif font-bold text-xl">{todayInHistory.date}</h3>
            </div>
            <p className="font-body text-sm text-kopi-black/80 leading-relaxed">
              {todayInHistory.story}
            </p>
          </div>
        </div>

        {/* Right Column - Sidebars */}
        <aside className="md:col-span-4 flex flex-col gap-8">
          
          {/* Market Mamak */}
          <div className="border-[1.5px] border-kopi-dark/60 p-5 bg-susu-white relative">
            <div className="absolute -top-3 left-4 bg-susu-white px-2 font-display text-xs uppercase font-bold tracking-widest text-kopi-dark border-[1.5px] border-kopi-dark/60">
              Market Mamak
            </div>
            
            <div className="mt-2 space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-kopi-dark/10 pb-2">
                <span>{marketMamak.ringgit}</span>
                {marketMamak.ringgitDirection === "up" ? 
                  <TrendingUp className="w-4 h-4 text-green-600" /> : 
                  <TrendingDown className="w-4 h-4 text-red-600" />
                }
              </div>
              <div className="flex justify-between items-center border-b border-kopi-dark/10 pb-2">
                <span>{marketMamak.bursa}</span>
                {marketMamak.bursaDirection === "up" ? 
                  <TrendingUp className="w-4 h-4 text-green-600" /> : 
                  <TrendingDown className="w-4 h-4 text-red-600" />
                }
              </div>
              <p className="font-body text-xs mt-3 text-kopi-black/70 italic text-balance">
                "{marketMamak.meaning}"
              </p>
            </div>
          </div>

          {/* Kopi Talk */}
          <div className="bg-[#EBE5D9] p-5 border-l-4 border-kaya-green">
            <h3 className="font-display text-xs uppercase font-bold tracking-wider text-kopi-dark mb-3">
              {kopiTalk.title}
            </h3>
            <p className="font-serif italic text-sm leading-relaxed text-kopi-black/80 text-balance">
              "{kopiTalk.content}"
            </p>
          </div>

          {/* What's Happening */}
          <div>
            <h3 className="font-display text-xs uppercase font-bold tracking-wider text-kopi-dark mb-4 border-b border-kopi-dark/20 pb-2 flex items-center gap-2">
              <Ticket className="w-4 h-4" /> What's Happening
            </h3>
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex gap-2 items-start font-body text-sm font-medium text-kopi-black/80">
                  <span className="text-gula-amber mt-[2px]">•</span>
                  <span className="text-balance">{event}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </motion.div>
  );
}
