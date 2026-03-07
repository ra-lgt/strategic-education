import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  { icon: "⚡", title: "Information Overload", desc: "The constant flood of data overwhelms cognitive processing, reducing decision quality." },
  { icon: "🔀", title: "Fragmented Attention", desc: "Context-switching destroys deep work capacity, fragmenting your mental bandwidth." },
  { icon: "🎯", title: "Algorithm-Driven Distraction", desc: "Platforms are engineered to capture your attention, not sharpen your thinking." },
  { icon: "🧠", title: "Loss of Deep Thinking", desc: "Surface-level processing replaces strategic thought, eroding your cognitive edge." },
];

const ProblemSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            AI Is Scaling Intelligence.
            <br />
            <span className="glow-text">But Most Humans Are Losing Their Edge.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This is not a motivation program. This is a cognitive training protocol
            designed to rebuild the mental systems AI cannot replicate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default ProblemSection;
