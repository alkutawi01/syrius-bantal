export const PORTFOLIO_SLOTS = ['portfolio-1', 'portfolio-2', 'portfolio-3'] as const;
export type PortfolioSlot = (typeof PORTFOLIO_SLOTS)[number];

export function isPortfolioSlot(value: string): value is PortfolioSlot {
  return (PORTFOLIO_SLOTS as readonly string[]).includes(value);
}

export const PORTFOLIO_DISCLAIMER_KEY = 'portfolio-disclaimer';
export const DEFAULT_PORTFOLIO_DISCLAIMER = 'Gambar di bawah ialah ilustrasi sementara untuk tunjuk gaya paparan — bukan hasil kerja sebenar pelanggan Syrius. Hubungi kami untuk lihat contoh sebenar atau berbincang tentang reka bentuk anda.';
export const MAX_DISCLAIMER_LENGTH = 500;
