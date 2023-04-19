import { MapPinLine } from 'phosphor-react'
import { AddresHeaderContainer, TextHeader } from './styles'

export function AddresHeader() {
  return (
    <AddresHeaderContainer>
      <MapPinLine size={22} weight="regular" color="#C47F17" />
      <TextHeader>
        <h3>Endereço de Entrega</h3>
        <h4>Informe o endereço onde deseja receber seu pedido</h4>
      </TextHeader>
    </AddresHeaderContainer>
  )
}
