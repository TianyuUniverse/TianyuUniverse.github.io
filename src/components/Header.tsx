import { useState, type MouseEvent } from "react";
import type { Language, SiteCopy } from "../content";
import { scrollToPageTop } from "../scrollToTop";

type HeaderProps = {
  copy: SiteCopy;
  language: Language;
  isLanguageChanging: boolean;
  onLanguageChange: (language: Language) => void;
};

const navItems = [
  ["#about", "navAbout"],
  ["#research", "navResearch"],
  ["#open-source", "navOpenSource"],
  ["#awards", "navAwards"],
  ["#contact", "navContact"],
] as const;

export function Header({ copy, language, isLanguageChanging, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const returnToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToPageTop();
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={copy.homeLabel} onClick={returnToTop}>
          <span className="wordmark-mark" aria-hidden="true">TY</span>
          <span className="wordmark-name">Tianyu Chen</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>

        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-nav" aria-label={copy.navLabel}>
          {navItems.map(([href, key]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {copy[key]}
            </a>
          ))}
        </nav>

        <div className="language-switch" aria-label={copy.languageLabel}>
          <button
            type="button"
            aria-label={language === "zh" ? "当前语言：中文" : "Switch to Chinese"}
            aria-pressed={language === "zh"}
            disabled={isLanguageChanging}
            onClick={() => onLanguageChange("zh")}
          >
            中
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            aria-label={language === "en" ? "Current language: English" : "Switch to English"}
            aria-pressed={language === "en"}
            disabled={isLanguageChanging}
            onClick={() => onLanguageChange("en")}
          >
            EN
          </button>
        </div>
      </header>
    </>
  );
}
