import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const cycles = [
  { name: "SPRINT", time: "15 Min", desc: "Focus training", color: "text-primary" },
  { name: "OFFLOAD", time: "20 Min", desc: "Dark recovery", color: "text-accent" },
  { name: "SAVE", time: "10 Sec", desc: "Stillness encoding", color: "text-gold-highlight" },
];

const StrategicBonusesSection = () => {
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
          <p className="text-sm font-display uppercase tracking-[0.3em] glow-text-gold mb-4">Bonus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold glow-text">
            The Strategic Bonuses
          </h2>
        </motion.div>

        <motion.div
          className="glass-card-glow p-8 md:p-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-xl md:text-2xl text-foreground text-center mb-2">
            3D Printable S.O.S
          </h3>
          <h4 className="font-display text-lg glow-text text-center mb-8">
            Cognitive Fitness Tracker
          </h4>

          <p className="text-muted-foreground text-center mb-8">
            This tracker trains cognitive endurance using three training cycles.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {cycles.map((c, i) => (
              <motion.div
                key={c.name}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
              >
                <CheckCircle className={`w-8 h-8 ${c.color} mx-auto mb-3`} />
                <h5 className={`font-display text-sm font-bold ${c.color} mb-1`}>{c.name}</h5>
                <p className="text-foreground text-sm font-semibold">{c.time}</p>
                <p className="text-muted-foreground text-xs mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic text-sm">
            "Cognitive RAM™ training to rebuild focus, not just motivation."
          </p>
        </motion.div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default StrategicBonusesSection;
