import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import nspBook from "@/assets/nsp-book.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="text-center py-4 border-b border-border">
        <p className="text-muted-foreground text-sm tracking-widest">strategiceducation.ca</p>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-elevated rounded-lg p-10 mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              The AI Era is Here.<br />
              What is Your Human Advantage?
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
              Raw data and processing power are now commodities. The future belongs
              to those who can master <span className="font-bold text-foreground">Neuro-Symbiotic Programming (NSP)</span> to
              direct machines, decode human behavior, and command their own
              cognitive state. Upgrade your mental software.
            </p>
            <CTAButton size="lg" onClick={() => navigate("/checkout")}>
              Unlock the NSP Blueprint – $27
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Rules Changed Section */}
      <section className="pt-[7.5rem] pb-[7.5rem] px-4 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
            The Rules of Success Have Fundamentally Changed.
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            AI can write, calculate, and analyse faster than any human mind.
            If you rely solely on information, you risk becoming obsolete.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed italic">
            To thrive, you must lead, connect, and think beyond the machine.
          </p>
        </div>
      </section>

      {/* Enter NSP Section */}
      <section className="pt-[7.5rem] pb-[7.5rem] px-4 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Enter Neuro-Symbiotic Programming (NSP)
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            NSP is the key to mastering mind and behavior in the automated age.
            I'm <span className="font-bold text-foreground">Khalil</span>, and I built this from real-world success, not theory.
          </p>
        </div>
      </section>

      {/* Book CTA Section */}
      <section className="pt-[7.5rem] pb-[7.5rem] px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <img src={nspBook} alt="Neuro-Symbiotic Programming Book" className="w-48 md:w-56 rounded shadow-lg" />
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                Upgrade Your Human Operating System
              </h2>
              <CTAButton onClick={() => navigate("/checkout")}>
                Download the Plan Guide Now – $27
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-[7.5rem] pb-[7.5rem] px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-foreground">What You'll Master</h2>
          <div className="space-y-4">
            {[
              "Offload cognitive tasks to AI with confidence.",
              "Reset mental clutter and focus instantly.",
              "Elite prompt questions for AI and yourself.",
              "Model top performer mindsets.",
              "Silence your inner critic on demand.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Risk */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center card-elevated rounded-lg p-8 glow-border">
          <h3 className="font-display text-xl font-bold mb-3 text-foreground">The Zero-Risk Protocol:</h3>
          <p className="text-muted-foreground">
            Try it for 30 days. If you don't see results, get a full refund. No questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <CTAButton size="lg" onClick={() => navigate("/checkout")}>
          DOWNLOAD YOUR NSP BLUEPRINT HERE
        </CTAButton>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          If you have any issues accessing your file, contact support at{" "}
          <a href="mailto:support@strategiceducation.ca" className="text-primary underline">
            support@strategiceducation.ca
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
