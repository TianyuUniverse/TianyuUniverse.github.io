const signalPath =
  "M0 165 L72 165 L84 150 L96 180 L110 165 L194 165 L208 138 L221 194 L238 165 L304 165 L318 120 L335 212 L352 165 L406 165 L421 142 L436 186 L452 165 L515 165 L530 98 L547 221 L564 165 L660 165";

export function SignalChart() {
  return (
    <svg viewBox="0 0 660 250" role="presentation">
      <defs>
        <linearGradient id="signalGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#80d8cf" stopOpacity="0.25" />
          <stop offset="0.42" stopColor="#80d8cf" />
          <stop offset="1" stopColor="#e76f51" />
        </linearGradient>
      </defs>
      <path className="signal-shadow" d={signalPath} />
      <path className="signal-line" d={signalPath} />
      <path className="signal-flow" d={signalPath} />
      <circle className="signal-pulse signal-pulse-a" cx="318" cy="120" r="5" />
      <circle className="signal-pulse signal-pulse-b" cx="530" cy="98" r="5" />
      <circle className="signal-pulse signal-pulse-c" cx="547" cy="221" r="5" />
    </svg>
  );
}
