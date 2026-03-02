import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", card: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="text-center py-6 border-b border-border">
        <h1 className="font-display text-2xl font-bold text-foreground">Complete Your Order</h1>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Secure Your Advantage.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Download the complete foundation of Neuro-Symbiotic Programming and start applying these protocols in the next 5 minutes.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="space-y-5">
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

            {/* Order Form */}
            <div className="card-elevated rounded-lg p-6">
              <h3 className="font-sans font-bold text-lg mb-4 text-foreground">Complete Your Order</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
                <Input
                  placeholder="Credit Card Number"
                  value={form.card}
                  onChange={(e) => setForm({ ...form, card: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
                <CTAButton type="submit" className="w-full">
                  Complete Purchase – $27
                </CTAButton>
              </form>
            </div>
          </div>
        </div>

        {/* Zero Risk */}
        <div className="max-w-2xl mx-auto mt-12 text-center card-elevated rounded-lg p-8 glow-border">
          <h3 className="font-display text-xl font-bold mb-3 text-foreground">The Zero-Risk Protocol:</h3>
          <p className="text-muted-foreground">
            Try it for 30 days. If you don't see results, get a full refund. No questions asked.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10">
          <CTAButton size="lg" onClick={() => navigate("/thank-you")}>
            DOWNLOAD YOUR NSP BLUEPRINT HERE
          </CTAButton>
        </div>
      </main>

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

export default Checkout;
