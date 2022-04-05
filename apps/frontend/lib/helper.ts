export const currencyFormatter = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol'
  }).format(value / 100);
}
