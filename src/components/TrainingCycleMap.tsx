import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const TrainingCycleMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { name: "SPRINT", time: "15 Min — Focus", color: "primary" },
    { name: "OFFLOAD", time: "20 Min — Dark Recovery", color: "accent" },
    { name: "SAVE", time: "10 Sec — Stillness Encoding", color: "gold-highlight" },
  ];

  return (
    <section className="relative neural-bg" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold glow-text mb-4">
            Training Cycles Map
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The continuous loop that rebuilds your cognitive endurance, one cycle at a time.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {steps.map((step, i) => (
            <div key={step.name} className="flex items-center gap-2 md:gap-4">
              <div className="glass-card-glow px-8 py-6 text-center min-w-[160px]">
                <p className={`font-display text-lg font-bold text-${step.color}`}>{step.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{step.time}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary animate-pulse-glow hidden md:block" />
              )}
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-primary/30 md:hidden" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Loop arrow back */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-muted-foreground text-sm font-display tracking-wider flex items-center gap-2">
            <span className="glow-text">↻</span> Repeat Cycle
          </div>
        </motion.div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default TrainingCycleMap;
