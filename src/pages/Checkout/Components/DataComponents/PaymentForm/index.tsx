import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentFormContainer } from './styles'
import { PaymentMethodInput } from './PaymentMethodInput'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../../../../Components/Input/styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },

  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },

  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string
  return (
    <PaymentFormContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <ErrorMessage>{paymentMethodError}</ErrorMessage>}
    </PaymentFormContainer>
  )
}
