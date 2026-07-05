import type { SiteCopy } from "../content";

export function Research({ copy }: { copy: SiteCopy }) {
  return (
    <section className="research-section section-shell section-pad" id="research" aria-labelledby="research-title">
      <div className="section-heading reveal"><p className="section-index">02 / RESEARCH</p><h2 id="research-title">{copy.researchTitle}</h2></div>
      <article className="research-card reveal">
        <div className="research-card-head">
          <div><p className="paper-type">{copy.paperType}</p><h3>Zero-Shot Nonintrusive Load Monitoring via Contrastive Learning-Based Multiscale Dual-Path Temporal Fusion Network</h3></div>
          <span className="publication-year">2025</span>
        </div>
        <div className="research-layout">
          <div className="research-summary">
            <p className="lead">{copy.researchSummary}</p>
            <div className="role-block"><span className="mini-label">{copy.roleLabel}</span><p>{copy.roleText}</p></div>
            <a className="text-link" href="https://doi.org/10.1109/TSG.2025.3635148" target="_blank" rel="noreferrer">
              <span>{copy.doiLink}</span><span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="research-details">
            <div className="detail-row"><span className="mini-label">{copy.problemLabel}</span><p>{copy.problemText}</p></div>
            <div className="detail-row"><span className="mini-label">{copy.methodLabel}</span><p>{copy.methodText}</p></div>
            <div className="detail-row"><span className="mini-label">{copy.stackLabel}</span><ul className="tag-list" aria-label={copy.stackAriaLabel}><li>Python</li><li>PyTorch</li><li>Contrastive Learning</li><li>Time Series</li><li>Zero-Shot</li></ul></div>
          </div>
        </div>
      </article>
    </section>
  );
}
