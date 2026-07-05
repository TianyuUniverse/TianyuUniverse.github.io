import type { SiteCopy } from "../content";

export function OpenSource({ copy }: { copy: SiteCopy }) {
  return (
    <section className="open-source section-pad" id="open-source" aria-labelledby="open-source-title">
      <div className="section-shell">
        <div className="section-heading light reveal">
          <p className="section-index">03 / OPEN SOURCE</p>
          <h2 id="open-source-title">{copy.openSourceTitle}</h2>
          <p className="section-intro">{copy.openSourceIntro}</p>
        </div>
        <div className="focus-grid">
          <article className="focus-card focus-card-model reveal">
            <div className="focus-card-top"><div className="focus-no">01</div><div className="focus-graphic model-graphic" aria-hidden="true"><span /><span /><span /></div></div>
            <p className="focus-label">FOUNDATION MODEL</p><h3>Tencent<br />Hunyuan LLM</h3><p>{copy.focus1}</p>
          </article>
          <article className="focus-card focus-card-memory reveal">
            <div className="focus-card-top"><div className="focus-no">02</div><div className="focus-graphic memory-graphic" aria-hidden="true"><i /><span /><span /><span /></div></div>
            <p className="focus-label">AGENT MEMORY</p><h3>TencentDB-<br />Agent-Memory</h3><p>{copy.focus2}</p>
          </article>
          <article className="focus-card focus-card-retrieval reveal">
            <div className="focus-card-top"><div className="focus-no">03</div><div className="focus-graphic retrieval-graphic" aria-hidden="true"><span /><i /><i /><i /></div></div>
            <p className="focus-label">KNOWLEDGE RETRIEVAL</p><h3>WeKnora</h3><p>{copy.focus3}</p>
          </article>
        </div>
        <div className="focus-strip reveal" aria-label={copy.focusLabel}>
          <span>LLM Applications</span><i /><span>Agent Memory</span><i /><span>RAG</span><i /><span>Deep Learning Engineering</span>
        </div>
      </div>
    </section>
  );
}
