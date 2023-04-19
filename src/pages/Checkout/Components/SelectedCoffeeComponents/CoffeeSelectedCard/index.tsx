import { Minus, Plus, Trash } from 'phosphor-react'
import {
  AmountContainer,
  CoffeeSelectedAmount,
  CoffeeSelectedContainer,
  DetailsContainer,
  InfoContainer,
  RemoveButton,
} from './style'
import { CartItem } from '../../../../../context/CartContext'
import { useCart } from '../../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeSelectedCard({ coffee }: CoffeeCartCardProps) {
  function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }
  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotalPrice)

  const { changeCartItemQuantity, removeSelectedCoffee } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveSelectedCoffee() {
    removeSelectedCoffee(coffee.id)
  }

  return (
    <CoffeeSelectedContainer>
      <CoffeeSelectedAmount>
        <img src={coffee.image} alt="" />

        <InfoContainer>
          <h3>{coffee.name}</h3>
          <DetailsContainer>
            <AmountContainer>
              <button onClick={handleDecrease} disabled={coffee.quantity <= 1}>
                <Minus size={14} weight="bold" />
              </button>
              <p>{coffee.quantity}</p>
              <button onClick={handleIncrease}>
                <Plus size={14} weight="bold" />
              </button>
            </AmountContainer>

            <RemoveButton onClick={handleRemoveSelectedCoffee}>
              <Trash size={16} weight="regular" color="#8047F8" />
              <h4>remover</h4>
            </RemoveButton>
          </DetailsContainer>
        </InfoContainer>
      </CoffeeSelectedAmount>

      <span>{formattedPrice}</span>
    </CoffeeSelectedContainer>
  )
}
