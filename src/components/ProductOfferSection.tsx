import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Digital blueprint",
  "Cognitive training framework",
  "Strategic interaction code",
  "Focus training protocol",
  "Tactical mental systems",
];

const ProductOfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative neural-bg" ref={ref}>
      <div className="section-container">
        <motion.div
          className="glass-card-glow p-8 md:p-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-display uppercase tracking-[0.3em] glow-text-gold mb-4">Complete System</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Neuro-Symbiotic Programming
          </h2>
          <h3 className="text-xl font-display glow-text mb-8">Foundation</h3>

          <ul className="space-y-4 text-left max-w-sm mx-auto mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8">
            <span className="text-5xl font-display font-bold glow-text">$27</span>
          </div>

          <motion.button
            className="glow-button w-full max-w-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
          >
            Unlock The Blueprint
          </motion.button>
        </motion.div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default ProductOfferSection;
