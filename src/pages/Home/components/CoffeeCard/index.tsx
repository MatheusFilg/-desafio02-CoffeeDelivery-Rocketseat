import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  CheckoutButton,
  CheckoutContainer,
  CoffeeCardContainer,
  CounterContainer,
  DescriptionContainer,
  NameContainer,
  PriceContainer,
  TagContainer,
} from './styles'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  name: string
  tag: string[]
  description: string
  price: number
  image: string
}

export interface CoffeeState {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeState) {
  const [quantity, setQuantity] = useState(1) // estado para alterar a quantidade no meu coffeecard

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart() // trazendo a função através do hook que foi criado anteriormente

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  } // adicionando a quantidade através da função

  function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      {/* poderiamos colocar as imagens numa pasta e trazer da seguinte maneira /}
      {/* {`coffees/${coffee.image}`} */}

      <TagContainer>
        {coffee.tag.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
        {/*  a gente usa duas informações na prop key pq vai 
       ter café com a mesma tag assim usamos o id p diferenciar */}
      </TagContainer>

      <NameContainer>{coffee.name}</NameContainer>

      <DescriptionContainer>{coffee.description}</DescriptionContainer>

      <BuyContainer>
        <PriceContainer>
          R$<span>{formattedPrice}</span>
        </PriceContainer>

        <CheckoutContainer>
          <CounterContainer>
            <button onClick={handleDecrease} disabled={quantity <= 1}>
              <Minus size={14} weight="bold" />
            </button>
            <input type="number" readOnly value={quantity} />
            <button>
              <Plus size={14} weight="bold" onClick={handleIncrease} />
            </button>
          </CounterContainer>

          <CheckoutButton onClick={handleAddToCart}>
            <ShoppingCart size={22} color="white" weight="fill" />
          </CheckoutButton>
        </CheckoutContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
