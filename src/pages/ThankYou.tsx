import nspBook from "@/assets/nsp-book.png";
import CTAButton from "@/components/CTAButton";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Welcome to the resistance, Khalil.
          </h1>
          <p className="text-muted-foreground mb-10">
            Your transaction is complete. Your mental upgrade is ready.
          </p>

          {/* Step 1 */}
          <div className="mb-10">
            <p className="font-bold text-foreground mb-6 text-lg">
              Step 1: Click the button below to download your copy of
              Neuro-Symbiotic Programming: Foundation.
            </p>
            <img
              src={nspBook}
              alt="Neuro-Symbiotic Programming Book"
              className="w-64 mx-auto mb-8 rounded shadow-lg"
            />
            <CTAButton size="lg">
              Download Now
            </CTAButton>
          </div>

          {/* Step 2 */}
          <div className="card-elevated rounded-lg p-8 mt-12 glow-border">
            <p className="text-foreground text-lg">
              <span className="font-bold">Step 2:</span> Check your email inbox. I've just sent you an <em>important
              briefing on your first cognitive Reset.</em>
            </p>
          </div>
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

export default ThankYou;
