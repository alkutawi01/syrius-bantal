import { Wordmark } from './Wordmark';
import { whatsappUrl } from '../lib/whatsapp';

export function SiteFooter() {
  return <>
    <a className="fab-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Syrius (buka di tab baharu)">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z" stroke="#fff" strokeWidth="1.6"/><path d="M8.5 8.4c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.2.1.4.1.5-.1.2-.2.6-.7.8-1 .2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4.1.5-.1 1.1-.4 1.5-.3.4-1 .8-1.8.8-1.5 0-3.2-.9-4.5-2.1-1.3-1.3-2.3-3-2.5-4.6-.1-.7.1-1.3.5-1.7Z" fill="#fff"/></svg>
    </a>

    <footer><div className="container footer-grid"><div><Wordmark /><p>Bantal sublimasi korporat untuk hadiah yang lebih bermakna.</p></div><div><p className="footer-label">HUBUNGI</p><a href={whatsappUrl} target="_blank" rel="noreferrer">+60 11-5449 8790<span className="sr-only"> (buka di tab baharu)</span></a><a href="mailto:syriusmalaysia@gmail.com">syriusmalaysia@gmail.com</a></div><div><p className="footer-label">STUDIO</p><a href="https://www.google.com/maps/search/?api=1&query=PT+428%2C+Pusat+Perniagaan+Bandar+Baru+Tunjong%2C+16010+Kota+Bharu%2C+Kelantan" target="_blank" rel="noreferrer">PT 428, Pusat Perniagaan<br />Bandar Baru Tunjong, 16010 Kota Bharu.<span className="sr-only"> (buka di tab baharu)</span></a></div></div><div className="container copyright">© 2026 Syrius Malaysia <span lang="en">Wear Your Vision</span></div></footer>
  </>;
}
