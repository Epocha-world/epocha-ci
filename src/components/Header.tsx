import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/90 text-cream border-b border-cream/10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center" aria-label="EPOCHA home">
          <img src={logo} alt="EPOCHA" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-cream/80 hover:text-lime transition-colors"
              activeProps={{ className: "text-lime" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/practicums" className="hidden md:inline-flex btn-primary text-sm">
          Explore practicums
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-cream/10 bg-ink text-cream">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-cream/90"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
