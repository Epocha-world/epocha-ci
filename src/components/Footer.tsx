import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import logo from "@/assets/new-logo.svg";

export function Footer() {
  const [showCookie, setShowCookie] = useState(true);
  return (
    <footer className="dark border-t border-border bg-background text-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-5 max-w-md">
          <Link to="/" className="inline-flex items-center" aria-label="EPOCHA home">
            <img src={logo} alt="EPOCHA logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-amber-400">
            A project-based learning hub dedicated to closing the gap between
            education and employability for youth aged 14–29 worldwide.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-lime">Home</Link></li>
            <li><Link to="/practicums" className="hover:text-lime">Training</Link></li>
            <li><Link to="/practicums" className="hover:text-lime">Practicums</Link></li>
            <li><Link to="/about" className="hover:text-lime">About</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Practicums</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/practicums/hanaro-marketing" className="hover:text-lime">Hanaro Leadership Practicum</Link></li>
            <li><Link to="/practicums/startup-lab-camp" className="hover:text-lime">Start-up Lab Camp</Link></li>
            <li><Link to="/practicums/mirae-industry" className="hover:text-lime">Mirae Industry Practicum</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/partnerships" className="hover:text-lime">Partner with us</Link></li>
            <li><Link to="/connect" className="hover:text-lime">Let's talk</Link></li>
            <li>
              <a href="https://wa.me/447801202799" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-lime">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© 2026 EPOCHA Learning Hub. All rights reserved.</span>
          <span>R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, South Korea</span>
        </div>
      </div>
      {showCookie && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 rounded-lg border border-border bg-card text-card-foreground shadow-lg p-4 flex items-start gap-3">
          <p className="text-xs leading-relaxed flex-1">
            This website uses cookies to ensure you get the best experience on our site. Read the{" "}
            <a
              href="/privacy-cookies-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lime hover:opacity-80"
            >
              Privacy & Cookies Policy
            </a>
            .
          </p>
          <button
            onClick={() => setShowCookie(false)}
            aria-label="Dismiss cookie notice"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </footer>
  );
}