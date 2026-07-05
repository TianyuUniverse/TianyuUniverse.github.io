import type { SiteCopy } from "../content";

export function Awards({ copy }: { copy: SiteCopy }) {
  const awards = [
    ["2026", copy.award1Title, "MCM · Meritorious Winner", "M"],
    ["2025", copy.award2Title, copy.award2Prize, "1"],
    ["2024", copy.award3Title, copy.award3Prize, "2"],
    ["2024", copy.award4Title, copy.award4Prize, "3"],
  ];
  return (
    <section className="awards section-shell section-pad" id="awards" aria-labelledby="awards-title">
      <div className="section-heading reveal"><p className="section-index">04 / RECOGNITION</p><h2 id="awards-title">{copy.awardsTitle}</h2></div>
      <ol className="award-list">
        {awards.map(([year, title, prize, mark], index) => (
          <li className="reveal" key={`${year}-${index}`}><time dateTime={year}>{year}</time><div><h3>{title}</h3><p>{prize}</p></div><span className="award-mark" aria-hidden="true">{mark}</span></li>
        ))}
      </ol>
    </section>
  );
}
