/* eslint-disable no-unused-vars */
// import { NavLink } from 'react-router-dom'
import { AddresForm } from './Components/DataComponents/AddresForm'
import { AddresHeader } from './Components/DataComponents/AddresHeader'
import { PaymentForm } from './Components/DataComponents/PaymentForm'
import { PaymentHeader } from './Components/DataComponents/PaymentHeader'
import { CoffeeSelectedCard } from './Components/SelectedCoffeeComponents/CoffeeSelectedCard'
import { PriceCheckout } from './Components/SelectedCoffeeComponents/PriceCheckout'
import {
  AddresContainer,
  CheckoutContainer,
  ConfirmButton,
  DataContainer,
  DataForm,
  PaymentContainer,
  SelectedBody,
  SelectedContainer,
} from './styles'
import { useCart } from '../../hooks/useCart'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const ConfirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  streetnumber: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})
export type OrderData = zod.infer<typeof ConfirmOrderFormValidationSchema>
type ConfirmOrderFormData = OrderData
/** Aqui eu to dizendo que os dados que devem ser cadastrados
 * pelo usuário devem ser do mesmo tipo que o da minha
 * validação feita pelo zod */

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(ConfirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/auth', {
      state: data,
    })
    cleanCart()
  }

  const { cartItems, cartQuantity } = useCart()

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <DataContainer>
          <h1>Complete seu pedido</h1>
          <DataForm>
            <AddresContainer>
              <AddresHeader />
              <AddresForm />
            </AddresContainer>
            <PaymentContainer>
              <PaymentHeader />
              <PaymentForm />
            </PaymentContainer>
          </DataForm>
        </DataContainer>

        <SelectedContainer>
          <h1>Cafés Selecionados</h1>
          <SelectedBody>
            {cartItems.map((item) => (
              <CoffeeSelectedCard key={item.id} coffee={item} />
            ))}

            <PriceCheckout />

            <ConfirmButton disabled={cartQuantity <= 0} type="submit">
              confirmar pedido
            </ConfirmButton>
          </SelectedBody>
        </SelectedContainer>
      </CheckoutContainer>
    </FormProvider>
  )
}
