import { ContactDialog } from "@/components/ContactDialog";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-20 md:py-32 flex flex-col items-start gap-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            Strategic Education
            <span className="block text-muted-foreground mt-2">
              Upgrade How You Think.
              <br />
              Upgrade What You Earn.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-secondary-foreground max-w-2xl leading-relaxed mb-4"
          >
            Helping capable professionals shift from execution to strategic leverage—so their income reflects their value.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col items-start gap-8 mt-8">
            <p className="text-base md:text-lg text-muted-foreground max-w-xl border-l-2 border-primary pl-4">
              A practical 30-day strategic upgrade for mid-career professionals who feel underpaid and under-positioned.
            </p>
          
          </motion.div>
        </motion.div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-6 md:py-10 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              This Is for You If…
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <ul className="space-y-6">
              {[
                "You are an experienced professional (5+ years) who delivers quality work but feels stuck in the 'execution trap'.",
                "You consistently solve expensive problems for your employer but capture very little of that value personally.",
                "You are watching less capable, more 'political' peers get promoted or paid more than you.",
                "You know you need to be more 'strategic' but don't have a concrete framework for what that actually means.",
                "You feel underpaid relative to the market and your contribution."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-lg text-secondary-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-muted-foreground" />
                Who this is NOT for:
              </h3>
              <p className="text-muted-foreground">
                This is not for beginners, students, or people looking for motivation. This is a technical upgrade for working professionals who already have hard skills but lack the strategic operating system to monetize them fully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              What We Do
              <span className="block text-muted-foreground text-xl font-normal mt-2">(And Don't Do)</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            
            <div className="space-y-6">
              <p className="text-xl font-medium text-foreground">
                We don't fix your resume. We don't teach you interview tricks. We don't give you 'hacks'.
              </p>
              <p className="text-xl text-secondary-foreground">
                We install a strategic operating system that creates leverage. When you have leverage, the resume and the interview take care of themselves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Asymmetric Thinking",
                  desc: "How to spot opportunities where the upside is uncapped and the downside is capped."
                },
                {
                  title: "Optionality",
                  desc: "Designing your career so you always have multiple paths, giving you negotiation power."
                },
                {
                  title: "Perception Engineering",
                  desc: "Shifting how key stakeholders perceive your value from 'commodity' to 'strategic asset'."
                },
                {
                  title: "Fast Execution",
                  desc: "Moving from idea to implementation at a speed that makes you indispensable."
                }
              ].map((pillar, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-primary">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8">
              <h3 className="text-2xl font-bold">The Strategic Upgrade (30 Days)</h3>
              <p className="text-lg text-secondary-foreground leading-relaxed">
                A structured 4-week intensive where we deconstruct your current professional positioning and rebuild it for leverage. You will leave with a clear roadmap to increase your income by 30-50% within 12 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 md:py-32 flex flex-col items-center text-center gap-8 border-t border-border bg-gradient-to-b from-transparent to-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Strategic leverage begins with clarity.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Stop waiting for permission to be strategic. The market pays for value, not tenure.
        </p>
        
          <Button size="lg" className="text-lg px-10 py-8 h-auto shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
            Book a Conversation
          </Button>
      </section>
    </Layout>
  );
}
