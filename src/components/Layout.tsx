import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="w-full max-w-[1100px] px-6 py-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-foreground">
          Strategic Education
        </div>
        <ThemeToggle />
      </header>
      
      <main className="w-full max-w-[1100px] px-6 flex-1 flex flex-col">
        {children}
      </main>
      
      <footer className="w-full border-t border-border mt-24">
        <div className="max-w-[1100px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>Strategic Education — Thinking that pays.</p>
          <p>© strategiceducation.ca</p>
        </div>
      </footer>
    </div>
  );
}
