import { useCart } from '../../../../../hooks/useCart'
import { PriceCheckoutContainer, PrinceInfo, TotalPrice } from './styles'

const DELIVERY_PRICE = 3.5

export function PriceCheckout() {
  function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = cartItemsTotal + DELIVERY_PRICE

  const formattedCartPriceTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedPriceTotal = formatMoney(cartTotal)

  return (
    <PriceCheckoutContainer>
      <PrinceInfo>
        <h3>Total de itens</h3>
        <span>R$ {formattedCartPriceTotal}</span>
      </PrinceInfo>
      <PrinceInfo>
        <h3>Entrega</h3>
        <span>R$ {formattedDeliveryPrice}</span>
      </PrinceInfo>
      <TotalPrice>
        <h3>Total</h3>
        <span>R$ {formattedPriceTotal}</span>
      </TotalPrice>
    </PriceCheckoutContainer>
  )
}
