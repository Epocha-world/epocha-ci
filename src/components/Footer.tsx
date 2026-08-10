import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo.svg";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { openAnalyticsSettings } from "@/lib/analytics-consent";

export function Footer() {
  return (
    <footer className="dark border-t border-border bg-ink text-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-4 max-w-md">
          <Link to="/" className="inline-flex items-center" aria-label="EPOCHA home">
            <img src={logo} alt="EPOCHA logo" className="h-28 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-amber-400">
            A project-based learning hub dedicated to closing the gap between education and
            employability for youth aged 14–29 worldwide.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-lime">
                Home
              </Link>
            </li>
            <li>
              <Link to="/practicums" className="hover:text-lime">
                Training
              </Link>
            </li>
            <li>
              <Link to="/practicums" className="hover:text-lime">
                Practicums
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-lime">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Practicums
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/practicums/hanaro" className="hover:text-lime">
                Hanaro Practicum
              </Link>
            </li>
            <li>
              <Link to="/practicums/startup-lab-camp" className="hover:text-lime">
                Start-up Lab Camp
              </Link>
            </li>
            <li>
              <Link to="/practicums/mirae-industry" className="hover:text-lime">
                Mirae Practicum
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about/partnerships" className="hover:text-lime">
                Partner with us
              </Link>
            </li>
            <li>
              <Link to="/connect" className="hover:text-lime">
                Let's talk
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/447801202799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-lime"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </li>
            <li className="pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/learnwithepocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EPOCHA on Instagram"
                  className="inline-flex rounded-sm text-muted-foreground transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <Instagram aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/epocha-world/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EPOCHA on LinkedIn"
                  className="inline-flex rounded-sm text-muted-foreground transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <Linkedin aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">KR Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-lime">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-lime">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-lime">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/safeguarding" className="hover:text-lime">
                Safeguarding
              </Link>
            </li>
            <li>
              <button type="button" onClick={openAnalyticsSettings} className="hover:text-lime">
                Cookie settings
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 text-xs text-muted-foreground flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-between">
          <span>© 2026 EPOCHA. All rights reserved.</span>
          <span>
            에포차(EPOCHA) · 대표 Ofranc Maeva Aurelie 외 1명(박주원) · 사업자등록번호 708-53-00997
          </span>
          <span>R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, South Korea</span>
        </div>
      </div>
      <AnalyticsConsentBanner />
    </footer>
  );
}
