import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import neuralCircle from "@/assets/neural-circle.png";

const ResonanceAlchemySection = () => {
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
          <p className="text-sm font-display uppercase tracking-[0.3em] glow-text-gold mb-4">Part 1</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Resonance Alchemy
            <br />
            <span className="glow-text">Forged on the Frontline</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card-glow p-8">
              <h3 className="font-display text-xl glow-text text-center mb-8">Stillness Protocol</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glow-border flex items-center justify-center font-display text-sm text-primary shrink-0">
                    01
                  </div>
                  <div className="glass-card p-4 flex-1">
                    <h4 className="font-display text-sm text-primary mb-1">Bypassing the Active Mind</h4>
                    <p className="text-muted-foreground text-sm">Edit Mode — Silence the cognitive noise layer</p>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-accent/50 animate-pulse-glow" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glow-border flex items-center justify-center font-display text-sm text-primary shrink-0">
                    02
                  </div>
                  <div className="glass-card p-4 flex-1">
                    <h4 className="font-display text-sm text-primary mb-1">Installing the Sankalpa</h4>
                    <p className="text-muted-foreground text-sm">Base Code Resolution — Clean cognitive directives</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-8 text-center italic">
                "Instead of fighting the mind, the protocol bypasses the noise layer
                and installs clean cognitive directives."
              </p>
            </div>
          </motion.div>

          {/* Neural Circle Visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={neuralCircle}
              alt="Neural network visualization"
              className="w-full max-w-sm animate-pulse-glow"
            />
          </motion.div>
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default ResonanceAlchemySection;
