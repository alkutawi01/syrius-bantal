export const PORTFOLIO_SLOTS = ['portfolio-1', 'portfolio-2', 'portfolio-3'] as const;
export type PortfolioSlot = (typeof PORTFOLIO_SLOTS)[number];

export function isPortfolioSlot(value: string): value is PortfolioSlot {
  return (PORTFOLIO_SLOTS as readonly string[]).includes(value);
}
