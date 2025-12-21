/**
 * Utility function to automatically switch meta descriptions based on promotion dates
 * This allows meta descriptions to auto-revert after the promotion ends
 */

export const PROMO_END_DATE = new Date('January 30, 2026');

/**
 * Returns the appropriate description based on whether the promotion is active
 * @param baseDescription - The normal description (used after promo ends)
 * @param promoDescription - The promotional description (used during promo)
 * @returns The appropriate description for the current date
 */
export function getPromoDescription(baseDescription: string, promoDescription: string): string {
  const today = new Date();
  return today <= PROMO_END_DATE ? promoDescription : baseDescription;
}
