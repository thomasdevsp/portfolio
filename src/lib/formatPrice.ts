export function formatPrice(value, fixed?: number) {
  if (!Number(value)) return '';

  let _value = !!fixed ? Number(value.toFixed(2)) : value;

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(_value);

  return `${amount}`;
}

export function formatMileage(value) {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
  }).format(value);

  return `${amount} Km`;
};
