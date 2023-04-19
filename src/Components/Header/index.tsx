import {
  ActionContainer,
  CheckoutButton,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ActionContainer>
        <LocationContainer>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <h3>Porto Alegre, RS</h3>
        </LocationContainer>

        <CheckoutButton>
          <NavLink to="/checkout">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </NavLink>
        </CheckoutButton>
      </ActionContainer>
    </HeaderContainer>
  )
}
