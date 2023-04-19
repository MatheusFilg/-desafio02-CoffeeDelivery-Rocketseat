import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../../Components/Input'
import { AddresFormContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddresForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as ErrorsType
  // poderia ser formState as unknown as ErrorsType

  return (
    <AddresFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />

      <Input
        placeholder="Número"
        type="number"
        className="streetnumber"
        {...register('streetnumber')}
        error={errors.streetnumber?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />

      <Input
        placeholder="Bairro"
        className="district"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        className="city"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        className="uf"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddresFormContainer>
  )
}
