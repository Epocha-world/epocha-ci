import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/practicums", label: "Practicums" },
  { to: "/about", label: "About" },
  { to: "/partner", label: "Partner" },
  { to: "/connect", label: "Connect" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="inline-block w-7 h-7 rounded-full bg-lime" />
          EPOCHA
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-lime transition-colors"
              activeProps={{ className: "text-lime" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/practicums" className="hidden md:inline-flex btn-primary text-sm">
          Explore practicums
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/90">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}