import type { SiteCopy } from "../content";

export function Contact({ copy }: { copy: SiteCopy }) {
  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel reveal">
        <p className="section-index">05 / CONTACT</p>
        <h2 id="contact-title">{copy.contactTitle}</h2>
        <p>{copy.contactText}</p>
        <div className="contact-links">
          <a href="mailto:2693196915@qq.com">2693196915@qq.com <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/TianyuUniverse" target="_blank" rel="noreferrer">github.com/TianyuUniverse <span aria-hidden="true">↗</span></a>
          <a href="https://orcid.org/0009-0006-4264-4068" target="_blank" rel="noreferrer">ORCID 0009-0006-4264-4068 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-orbit" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
