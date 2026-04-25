import { motion } from "motion/react";

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto py-12"
    >
      <h1 className="font-serif text-4xl md:text-5xl font-black mb-8 text-kopi-dark text-center">
        Our Kopitiam Story
      </h1>
      
      <div className="font-body text-lg leading-relaxed text-kopi-black space-y-6">
        <p>
          Selamat datang to Kopi Press. Think of us as that corner table at your local kopitiam where the uncles gather every morning. 
        </p>
        <p>
          We know you're busy. You have traffic to beat, meetings to attend, and a dozen WhatsApp groups to mute. That's why we distill Malaysia's daily news into a quick, warm, 5-minute read. No fluff, no panic-inducing headlines—just what you need to know to start your day right.
        </p>
        <p>
          We cover the top stories, the business movements (simplified for the rest of us), a bit of history, and the weekend entertainment highlights. 
        </p>
        <p className="font-serif italic text-xl border-l-2 border-gula-amber pl-4 mt-8">
          "Grab your kopi, read the brief, and go conquer your day."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-kopi-dark/20 text-center">
        <h2 className="font-display uppercase text-xs tracking-widest font-bold mb-4">Drop us a line</h2>
        <p className="font-body text-sm">hello@kopipress.com.my</p>
      </div>
    </motion.div>
  );
}
