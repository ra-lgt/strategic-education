import { ContactDialog } from "@/components/ContactDialog";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, TrendingUp, Target } from "lucide-react";
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
              Thinking That Pays in the Era of AI.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-secondary-foreground max-w-3xl leading-relaxed mb-6 font-semibold"
          >
            Upgrade Your Operating System. Transition from "Doing" to "Deciding." Capture the Value You Create.
          </motion.p>

          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-secondary-foreground max-w-3xl leading-relaxed mb-8"
          >
            In a decade where 100 years of change is compressed into 10, the "Execution Trap" is no longer just a career plateau—it is a risk to your agency. Most professionals are trained to be efficient machines. But in the era of Superintelligence, "efficiency" is a commodity. <span className="font-bold text-foreground">Judgment is the new gold.</span>
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col items-start gap-8 mt-8">
            <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Book a Conversation
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY PROFESSIONALS ARE UNDERPAID */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              Why Most Professionals Are Currently Underpaid
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Most high-achievers are stuck in a cycle of solving "expensive problems" for their employers while capturing only a fraction of that value for themselves.
            </p>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-bold text-foreground bg-muted/30">Aspect</th>
                <th className="text-left py-4 px-4 font-bold text-foreground bg-red-500/10">The Execution Trap (Old World)</th>
                <th className="text-left py-4 px-4 font-bold text-foreground bg-green-500/10">Strategic Leverage (New World)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: "Revenue Model",
                  old: "Paid for time and effort",
                  new: "Paid for judgment and outcomes"
                },
                {
                  aspect: "Core Focus",
                  old: "Focuses on efficiency",
                  new: "Focuses on optionality"
                },
                {
                  aspect: "Knowledge Half-Life",
                  old: "Skills have a 2-year half-life",
                  new: "Mental models have a lifetime half-life"
                },
                {
                  aspect: "Career Path",
                  old: "Operates in a linear career path",
                  new: "Operates in a personal 'Archipelago'"
                }
              ].map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">{row.aspect}</td>
                  <td className="py-4 px-4 text-secondary-foreground">{row.old}</td>
                  <td className="py-4 px-4 text-secondary-foreground">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* THE FOUNDER'S PHILOSOPHY */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              The Founder's Philosophy
              <span className="block text-muted-foreground text-xl font-normal mt-2">The Munger-Musk-Superintelligence Nexus</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                Strategic Education isn't built on "career hacks." It is built on a multidisciplinary <span className="font-bold text-foreground">"Latticework of Mental Models"</span>—a concept championed by Charlie Munger and utilized by Elon Musk to navigate complex systems.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-foreground text-lg font-medium">
                "I believe in the discipline of mastering the best that other people have ever figured out. I don't believe in just sitting down and trying to dream it all up yourself. Nobody's that smart." — Charlie Munger
              </blockquote>

              <p className="text-lg text-secondary-foreground leading-relaxed">
                We integrate the timeless wisdom of Systems Thinking with the cutting-edge realities of Superintelligence. By understanding how systems—economic, technological, and human—interact, you can spot the "Asymmetric Opportunities" that others miss. Whether you are navigating a corporate hierarchy or building your own consulting practice, this is the "Resonance" required to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE CREATE VALUE */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              How We Create Value
              <span className="block text-muted-foreground text-xl font-normal mt-2">The 30-Day Strategic Upgrade</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            
            <p className="text-lg text-secondary-foreground leading-relaxed">
              This intensive is designed to "re-wire" your professional positioning in four weeks.
            </p>

            <div className="space-y-8">
              {[
                {
                  week: "Week 1",
                  title: "Epistemic Audit",
                  desc: "Identify your 'Non-Computable Assets'—the high-trust relationships and domain expertise that AI cannot replicate."
                },
                {
                  week: "Week 2",
                  title: "Optionality Engineering",
                  desc: "Design your 'Way Station' (Vitopia). Build a career structure that thrives on volatility rather than being broken by it."
                },
                {
                  week: "Week 3",
                  title: "Perception Architecture",
                  desc: "Shift your market identity. We stop selling your 'labor' and start selling your 'visionary judgment'."
                },
                {
                  week: "Week 4",
                  title: "Leverage Activation",
                  desc: "Implement the systems to increase your income by 30-50% while actually working fewer, more impactful hours."
                }
              ].map((week, i) => (
                <div key={i} className="pb-8 border-b border-border last:border-b-0">
                  <h3 className="text-lg font-bold text-primary mb-2">{week.week}: {week.title}</h3>
                  <p className="text-lg text-secondary-foreground leading-relaxed">{week.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE REWARD */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sticky top-8">
              The Reward
              <span className="block text-muted-foreground text-xl font-normal mt-2">Mastery and Peace of Mind</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-secondary-foreground leading-relaxed">
              When you upgrade how you think, the rewards are both financial and psychological. You move from the anxiety of "keeping up" to the confidence of "steering the ship."
            </p>

            <div className="space-y-6">
              {[
                "Become the 'Consultant of Choice' for organizations navigating the intelligence explosion.",
                "Build a 'Walled Garden' of value that protects your family's future.",
                "Master the 'Interaction Code' of human behavior to lead teams in a post-labor economy."
              ].map((reward, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-card border border-border rounded-lg">
                  <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-lg text-secondary-foreground leading-relaxed">{reward}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24 border-t border-border">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Case Studies: From Execution to Strategy
            </h2>
            <p className="text-xl text-secondary-foreground">
              Real professionals. Real transformations. Real results.
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <motion.div 
              variants={fadeIn}
              className="p-8 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Case Study 1: The Logistics Architect</h3>
                  <p className="text-muted-foreground">From Technical Execution to Strategic Supply Chain Design</p>
                </div>
              </div>
              
              <div className="space-y-4 text-lg">
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Profile</h4>
                  <p className="text-secondary-foreground">A Certified Customs Specialist with 15 years of experience managing complex international freight.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Execution Trap</h4>
                  <p className="text-secondary-foreground">He was seen as a "technical expert" who cleared files. He was indispensable but capped by his hourly output and constant fire-fighting.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Strategic Upgrade</h4>
                  <p className="text-secondary-foreground">We installed the Systems Thinking model. He shifted from "clearing customs" to "designing resilient global supply chains" for high-stakes manufacturers. He began using AI to forecast regulatory shifts rather than just reacting to them.</p>
                </div>
                
                <div className="p-4 bg-blue-500/10 rounded border border-blue-500/20">
                  <h4 className="font-bold text-foreground mb-2">The Reward</h4>
                  <p className="text-secondary-foreground">He exited his salaried role to become an independent consultant. He now commands a retainer that is 40% higher than his previous salary, while working only 20 hours a week on high-level strategy.</p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              variants={fadeIn}
              className="p-8 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Target className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Case Study 2: The Systems Strategist</h3>
                  <p className="text-muted-foreground">From "The Fixer" to the "Operating System Architect"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-lg">
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Profile</h4>
                  <p className="text-secondary-foreground">A mid-career Project Manager overseeing software implementations in the logistics and freight-forwarding sector.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Execution Trap</h4>
                  <p className="text-secondary-foreground">She was the "go-to" person for every technical glitch. Her days were consumed by low-level troubleshooting, leaving zero time for high-level career planning.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Strategic Upgrade</h4>
                  <p className="text-secondary-foreground">We implemented the Munger-Musk Latticework. She stopped fixing individual bugs and started redesigning the internal "Operating System" of her department. She moved from "service provider" to "strategic advisor" to the C-suite.</p>
                </div>
                
                <div className="p-4 bg-purple-500/10 rounded border border-purple-500/20">
                  <h4 className="font-bold text-foreground mb-2">The Reward</h4>
                  <p className="text-secondary-foreground">Within 6 months, she was promoted to a Director of Strategic Operations role. She now manages the AI integration strategy for her firm—a role that didn't exist a year ago.</p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div 
              variants={fadeIn}
              className="p-8 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-amber-500/10">
                  <Check className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Case Study 3: The Independent Navigator</h3>
                  <p className="text-muted-foreground">Securing Agency in a Volatile Market</p>
                </div>
              </div>
              
              <div className="space-y-4 text-lg">
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Profile</h4>
                  <p className="text-secondary-foreground">A professional who felt the "Future Shock" of AI and feared their domain expertise was becoming obsolete.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Execution Trap</h4>
                  <p className="text-secondary-foreground">Paralyzed by "Moral and Technical Uncertainty." They were waiting for their company to provide a roadmap for the AI transition.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">The Strategic Upgrade</h4>
                  <p className="text-secondary-foreground">We focused on Epistemic Clarity and Asymmetric Optionality. We helped them identify their "Non-Computable Assets"—their deep industry relationships and specialized judgment that AI cannot replicate.</p>
                </div>
                
                <div className="p-4 bg-amber-500/10 rounded border border-amber-500/20">
                  <h4 className="font-bold text-foreground mb-2">The Reward</h4>
                  <p className="text-secondary-foreground">They built a "Walled Garden" consulting practice. Instead of fearing AI, they now use it as a "Force Multiplier" to serve 3x the clients with 1/2 the effort. They have achieved Total Career Agency.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-4 md:py-7 flex flex-col items-center text-center gap-8 border-t border-border bg-gradient-to-b from-transparent to-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Strategic leverage begins with clarity.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Stop waiting for permission to be strategic. The market pays for value, not tenure.
        </p>
        
          <Button size="lg" className="text-lg px-10 py-8 h-auto shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
            Continue with video
          </Button>
      </section>
    </Layout>
  );
}
