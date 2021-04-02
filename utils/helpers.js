export function saveLocalData(cart, checkoutId, checkoutUrl) {
  localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([cart, checkoutId, checkoutUrl]))
}

export function getLocalData() {
  return JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME))
}

export async function updateShopifyCheckout(updatedCart, checkoutId) {
  const lineItems = updatedCart.map(item => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  await fetch('/api/update-checkout', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ checkoutId, lineItems }),
  })
}