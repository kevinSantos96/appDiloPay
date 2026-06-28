export const formateoMonto = cantidad => {
  return Number(cantidad).toLocaleString('en-US', {
    style: 'currency',
    currency: 'HNL',
  });
};
