export function Wordmark() {
  return <picture>
    <source srcSet="/syrius-logo.webp" type="image/webp" />
    <img className="syrius-logo" src="/syrius-logo.png" alt="SYRIUS" width={1600} height={264} />
  </picture>;
}
