import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.png'
import {
  BaseInfoContainer,
  ConfirmationBody,
  ConfirmationContainer,
  ConfirmationHeader,
  Illustration,
  InfoText,
  LocalIcon,
  OrderConfirmedContainer,
  PaymentIcon,
  TimeIcon,
} from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/Components/DataComponents/PaymentForm'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { state } = useLocation() as LocationType

  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>
  /** UseEffect p resolver caso o usuario acesse diretamente a
   * página do pedido, assim a gente faz ele retornar para a Home
   * caso não tenha um State na página de confirmação do pedido
   */

  return (
    <OrderConfirmedContainer>
      <ConfirmationContainer>
        <ConfirmationHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </ConfirmationHeader>
        <ConfirmationBody>
          <BaseInfoContainer>
            <LocalIcon>
              <MapPin weight="fill" size={16} color="white" />
            </LocalIcon>
            <InfoText>
              <p>
                Entrega em 
                <strong>
                   {state.street}, {state.streetnumber} {state.complement}
                </strong>
              </p>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            </InfoText>
          </BaseInfoContainer>

          <BaseInfoContainer>
            <TimeIcon>
              <Timer weight="fill" size={16} color="white" />
            </TimeIcon>
            <InfoText>
              <p>Previsão de Entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </InfoText>
          </BaseInfoContainer>

          <BaseInfoContainer>
            <PaymentIcon>
              <CurrencyDollar weight="fill" size={16} color="white" />
            </PaymentIcon>
            <InfoText>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            </InfoText>
          </BaseInfoContainer>
        </ConfirmationBody>
      </ConfirmationContainer>

      <Illustration src={illustration} alt="" />
    </OrderConfirmedContainer>
  )
}
