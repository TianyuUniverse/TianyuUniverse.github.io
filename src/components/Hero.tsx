import type { Language, SiteCopy } from "../content";
import { SignalChart } from "./SignalChart";

export function Hero({ copy, language }: { copy: SiteCopy; language: Language }) {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <p className="eyebrow">{copy.heroEyebrow}</p>
        <h1 id="hero-title">
          <span>{copy.heroHello}</span>{" "}
          <strong>{copy.heroName}<span className="accent-dot">{copy.heroPunctuation}</span></strong>
        </h1>
        {language === "zh" && <p className="hero-alias">Tianyu Chen</p>}
        <p className="hero-lede">{copy.heroLede}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#research">
            <span>{copy.viewResearch}</span><span aria-hidden="true">↘</span>
          </a>
          <a className="button button-quiet" href="https://github.com/TianyuUniverse" target="_blank" rel="noreferrer">
            <span>GitHub</span><span aria-hidden="true">↗</span>
          </a>
        </div>
        <dl className="hero-meta" aria-label={copy.profileLabel}>
          <div><dt>{copy.schoolLabel}</dt><dd>{copy.schoolValue}</dd></div>
          <div><dt>{copy.disciplineLabel}</dt><dd>{copy.disciplineValue}</dd></div>
          <div><dt>{copy.statusLabel}</dt><dd className="status-value"><span className="status-dot" /><span>{copy.statusValue}</span></dd></div>
        </dl>
      </div>

      <aside className="hero-visual reveal" aria-label={copy.researchOverviewLabel}>
        <div className="visual-topline"><span>{copy.profileIndex}</span><span>2024—2026</span></div>
        <div className="signal-wrap" aria-hidden="true">
          <SignalChart />
          <span className="signal-label signal-label-a">aggregate</span>
          <span className="signal-label signal-label-b">patterns</span>
          <span className="signal-label signal-label-c">insight</span>
        </div>
        <div className="visual-title">
          <p>{copy.visualKicker}</p>
          <h2>Deep Learning<br />× Time Series</h2>
        </div>
        <div className="visual-footer"><span>Python</span><span>PyTorch</span><span>LLM</span><span>RAG</span></div>
      </aside>
    </section>
  );
}
