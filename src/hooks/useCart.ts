import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
  const context = useContext(CartContext)
  return context
}

// hook utilizado para facilitar a exportação do meu context
// pois assim através desse hook consigo acessar o contexto
