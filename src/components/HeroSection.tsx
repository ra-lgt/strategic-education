import { motion } from "framer-motion";
import heroBook from "@/assets/hero-book.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center neural-bg overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-display uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Strategic Education
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
              <span className="text-foreground">The AI Era Is Here.</span>
              <br />
              <span className="glow-text">What Is Your Human Advantage?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Raw data and processing power are now commodities.
              Real leverage comes from cognitive discipline, strategic pattern recognition,
              and command over your own mental systems.
            </p>
            <motion.button
              className="glow-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
            >
              Unlock The NSP Blueprint — $27
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow/10 to-teal-glow/10 blur-3xl rounded-full" />
              <img
                src={heroBook}
                alt="Neuro-Symbiotic Programming Foundation Blueprint"
                className="relative z-10 w-full max-w-md animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
    </section>
  );
};

export default HeroSection;
