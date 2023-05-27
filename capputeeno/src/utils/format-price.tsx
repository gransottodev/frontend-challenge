export function formatPrice(valueInCents: number){
  const finalValue = valueInCents / 100
  return finalValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}