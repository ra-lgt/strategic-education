import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import handHologram from "@/assets/hand-hologram.png";

const methods = [
  { title: "Pacing vs Leading", desc: "Match then redirect behavioral patterns for strategic influence." },
  { title: "Eye-Accessing Cues", desc: "Micro-tell algorithm for reading cognitive states in real-time." },
  { title: "De-escalation Scripts", desc: "Structured protocols for neutralizing high-tension interactions." },
  { title: "Pattern Interrupts", desc: "Break automatic loops to create strategic openings." },
  { title: "Tactical Empathy", desc: "Calibrated emotional engagement for deeper rapport." },
  { title: "Subcultural Probes", desc: "Decode hidden group dynamics and tribal signals." },
];

const InteractionCodeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative neural-bg" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-display uppercase tracking-[0.3em] glow-text-gold mb-4">Part 2</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            <span className="glow-text">The Interaction Code</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Strategic human interaction methods for the operator who refuses to be passive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {methods.map((m, i) => (
              <motion.div
                key={m.title}
                className="glass-card p-6 group hover:border-primary/40 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 0 30px hsl(185 90% 55% / 0.15)" }}
              >
                <h4 className="font-display text-sm text-primary mb-2">{m.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-teal-glow/5 blur-3xl rounded-full" />
              <img
                src={handHologram}
                alt="Holographic interaction interface"
                className="relative z-10 w-full max-w-md rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default InteractionCodeSection;
