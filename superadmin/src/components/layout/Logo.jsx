import logoMark from '../../assets/platform_settings/Untitled 1.png'
import logoText from '../../assets/platform_settings/Untitled 2.png'

export function Logo() {
  return (
    <a className="brand" href="/" aria-label="Nucleotide dashboard">
      <span className="brand-assets" aria-hidden="true">
        <img className="brand-logo-mark" src={logoMark} alt="" />
        <img className="brand-logo-text" src={logoText} alt="" />
      </span>
      <span className="sr-only">Nucleotide</span>
    </a>
  )
}
