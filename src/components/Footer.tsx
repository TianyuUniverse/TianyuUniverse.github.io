import type { SiteCopy } from "../content";
import { scrollToPageTop } from "../scrollToTop";

export function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="site-footer section-shell">
      <p>© {new Date().getFullYear()} Tianyu Chen</p>
      <p>{copy.footerText}</p>
      <button className="back-top" type="button" onClick={scrollToPageTop}>
        {copy.backTop} ↑
      </button>
    </footer>
  );
}
