import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { articles } from "./data";
import { ArrowLeft, Clock } from "lucide-react";

export function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h2 className="font-serif text-3xl font-bold mb-4">Story not found.</h2>
        <Link to="/" className="font-display text-sm uppercase underline font-bold hover:text-gula-amber transition-colors">
          Go back to front page
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto py-8"
    >
      <Link to="/" className="inline-flex items-center gap-2 font-display text-[10px] uppercase font-bold tracking-widest text-kopi-dark/60 hover:text-gula-amber transition-colors mb-12">
        <ArrowLeft className="w-3 h-3" /> Back to Brief
      </Link>

      <span className="font-display text-[11px] uppercase font-bold tracking-widest text-kaya-green mb-4 block">
        {article.category}
      </span>
      
      <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-6 text-kopi-dark text-balance">
        {article.title}
      </h1>

      <div className="flex items-center justify-between border-y border-kopi-dark/10 py-3 mb-8 font-display text-[10px] uppercase font-bold text-kopi-dark/50">
        <span>By Kopi Press Editorial</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{article.readTimeMin} min read</span>
        </div>
      </div>

      <div className="font-body text-lg leading-relaxed text-kopi-black space-y-6">
        <p className="font-serif text-xl italic opacity-80 mb-8 border-l-2 border-gula-amber pl-4">
          {article.summary}
        </p>

        {article.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t-2 border-kopi-dark/20 text-center">
        <p className="font-serif italic text-lg text-kopi-dark/80">
          Have a great morning ahead!
        </p>
      </div>
    </motion.article>
  );
}
