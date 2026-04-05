import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200";

  const variantClasses = {
    primary:
      "bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:bg-white/90",
    secondary:
      "border border-white/12 bg-white/6 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10",
    ghost:
      "text-white/70 hover:text-white hover:bg-white/6",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}