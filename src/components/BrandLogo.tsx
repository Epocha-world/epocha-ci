import logo from "@/assets/epocha-logo-footer.png";

/** Preserve the supplied mark; only the wordmark follows the surface color. */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span role="img" aria-label="EPOCHA Learning Hub" className={`brand-logo ${className}`}>
      <span
        aria-hidden="true"
        className="brand-logo-wordmark"
        style={{ maskImage: `url(${logo})`, WebkitMaskImage: `url(${logo})` }}
      />
      <img src={logo} alt="" width="250" height="100" className="brand-logo-symbol" />
    </span>
  );
}
