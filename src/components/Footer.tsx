import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-7 h-7 rounded-full bg-lime" />
            EPOCH LEARNING HUB
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A project-based learning hub dedicated to closing the gap between
            education and employability for youth aged 14–29 worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Practicums</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/practicums" className="hover:text-lime">EPOCHA</Link></li>
            <li><Link to="/practicums" className="hover:text-lime">Industry</Link></li>
            <li><Link to="/practicums" className="hover:text-lime">Leadership</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/partner" className="hover:text-lime">Partner with us</Link></li>
            <li><a href="mailto:hello@epocha.world" className="hover:text-lime">hello@epocha.world</a></li>
            <li><Link to="/connect" className="hover:text-lime">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© 2026 EPOCHA Learning Hub. All rights reserved.</span>
          <span>R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, South Korea</span>
        </div>
      </div>
    </footer>
  );
}