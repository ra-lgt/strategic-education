import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
}

const CTAButton = ({ children, variant = "primary", size = "default", className, ...props }: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "font-sans font-bold rounded-md transition-all duration-300 cursor-pointer",
        variant === "primary" && "bg-primary text-primary-foreground hover:brightness-110 animate-pulse-glow",
        variant === "outline" && "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        size === "default" && "px-8 py-3 text-base",
        size === "lg" && "px-10 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
