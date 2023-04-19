import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void // uma função que tem o coffee como parametro e retorna void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeSelectedCoffee: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeedelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  /** Agora posso usar a informação salva no local storage como o
   *  estado inicial para quando o usuario entrar novamente a lista
   *  de cafés anterior estar lá
   */

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  /** reduce junta todos os elementos de um array.
   * Nesse caso é somado o valor que já tem no carrinho com
   * o valor do café que está sendo adicionado.
   * O segundo parametro é p definir em quanto essa soma começa,
   * no caso começaremos em 0
   *  */

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    // Perceba que cartItems é usado para metodos de array (como por exemplo .findIndex)
    // Já o cartItem é utilizado quando queremos acessar alguma "propriedade" do café

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }
  // checando se o café que eu quero adicionar existe no carrinho.
  // Caso não exista: Ele adiciona o café através do metodo .push
  // Caso exista: ele irá

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
      /** aqui estou verificando se o café já está na lista e a partir disso
      ele será salvo no rascunho e sua quantidade será mudada a partir do
      tipo de botão que estiver sendo acionado (increase ou decrease) */
    })
    setCartItems(newCart)
  }

  function removeSelectedCoffee(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
      //* * Deletando um item da lista através do seu id ~similar
      //* á mudança de quantidade~ */
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  // Salvando qualquer tipo de alteração no local storage

  function cleanCart() {
    setCartItems([])
  }
  // limpando o carrinho após a confirmação do pedido

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeSelectedCoffee,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
