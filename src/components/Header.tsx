import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/new-logo.svg";

interface NavLink {
  to: string;
  label: string;
}

interface NavGroup {
  label: string;
  children: NavLink[];
}

type NavItem = NavLink | NavGroup;

function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/practicums", label: "Training" },
  {
    label: "Practicums",
    children: [
      { to: "/practicums/hanaro-marketing", label: "Hanaro Leadership Practicum" },
      { to: "/practicums/startup-lab-camp", label: "Start-up Lab Camp" },
      { to: "/practicums/mirae-industry", label: "Mirae Industry Practicum" },
    ],
  },
  {
    label: "About",
    children: [
      { to: "/about/our-story", label: "Our Story" },
      { to: "/about/partnerships", label: "Partnerships" },
      { to: "/grow-with-us", label: "Work with us" },
      { to: "/connect", label: "Contact Us" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/90 text-cream border-b border-cream/10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center" aria-label="EPOCHA home">
          <img src={logo} alt="EPOCHA" className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) =>
            isNavGroup(n) ? (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(n.label)}
                onMouseLeave={() => setOpenDropdown((cur) => (cur === n.label ? null : cur))}
              >
                <button
                  className="flex items-center gap-1 text-sm text-cream/80 hover:text-lime transition-colors"
                  aria-expanded={openDropdown === n.label}
                  aria-haspopup="menu"
                >
                  {n.label} <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === n.label && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="rounded-xl border border-cream/10 bg-ink shadow-xl overflow-hidden">
                      {n.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-3 text-sm text-cream/80 hover:text-lime hover:bg-white/5 transition-colors"
                          activeProps={{ className: "text-lime bg-white/5" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-cream/80 hover:text-lime transition-colors"
                activeProps={{ className: "text-lime" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <Link
          to="/practicums"
          hash="choose-your-practicum"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Explore practicums
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-cream/10 bg-ink text-cream">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) =>
              isNavGroup(n) ? (
                <div key={n.label} className="flex flex-col gap-2">
                  <span className="py-2 text-cream/60 text-xs uppercase tracking-wider font-semibold">
                    {n.label}
                  </span>
                  {n.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className="pl-4 py-2 text-cream/90 hover:text-lime"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-cream/90"
                >
                  {n.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
