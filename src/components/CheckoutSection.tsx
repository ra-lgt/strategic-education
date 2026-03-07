import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

const CheckoutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [addAudio, setAddAudio] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const total = addAudio ? 44 : 27;

  return (
    <section id="checkout" className="relative neural-bg" ref={ref}>
      <div className="section-container">
        <motion.div
          className="glass-card-glow p-8 md:p-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-display font-bold text-center text-foreground mb-8">
            Premium Checkout
          </h2>

          {/* Product Summary */}
          <div className="glass-card p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display text-sm text-primary">Neuro-Symbiotic Programming</h3>
                <p className="text-foreground font-semibold">Foundation</p>
              </div>
              <span className="font-display text-xl text-foreground font-bold">$27</span>
            </div>
          </div>

          {/* Audio Upgrade */}
          <motion.div
            className={`glass-card p-6 mb-6 cursor-pointer transition-all duration-300 ${
              addAudio ? "border-primary/50 shadow-[0_0_20px_hsl(185_90%_55%/0.15)]" : ""
            }`}
            onClick={() => setAddAudio(!addAudio)}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                  addAudio
                    ? "bg-primary border-primary"
                    : "border-muted-foreground/30"
                }`}
              >
                {addAudio && <Check className="w-4 h-4 text-primary-foreground" />}
              </div>
              <div>
                <h4 className="font-display text-sm glow-text">
                  Yes, add The Frontline Audio Briefings (+$17)
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Upgrade your order with exclusive audio briefings that expand the blueprint
                  with real-world strategy insights.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Total */}
          <div className="flex justify-between items-center mb-6 px-2">
            <span className="text-muted-foreground font-display text-sm">Total</span>
            <span className="font-display text-2xl font-bold glow-text">${total}</span>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(185_90%_55%/0.1)] transition-all font-body"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(185_90%_55%/0.1)] transition-all font-body"
            />
          </div>

          <motion.button
            className="glow-button w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue Primary
          </motion.button>

          <p className="text-muted-foreground text-xs text-center mt-4">
            Secure payment powered by Stripe. Your information is encrypted.
          </p>
        </motion.div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default CheckoutSection;
