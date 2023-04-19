import { CurrencyDollar } from 'phosphor-react'
import { PaymentHeaderContainer, TextHeader } from './styles'

export function PaymentHeader() {
  return (
    <PaymentHeaderContainer>
      <CurrencyDollar size={22} weight="regular" color="#8047F8" />
      <TextHeader>
        <h3>Pagamento</h3>
        <h4>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </h4>
      </TextHeader>
    </PaymentHeaderContainer>
  )
}
