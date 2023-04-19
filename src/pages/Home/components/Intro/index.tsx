import {
  BenefitContainer,
  ImageContainer,
  IntroContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  ItemContainer,
  LeftContainer,
  TitleContainer,
} from './styles'
import coffeehome from '../../../../assets/CaféHome.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <LeftContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </TitleContainer>
        <ItemContainer>
          <BenefitContainer>
            <Item1>
              <ShoppingCart size={16} color="white" weight="fill" />
            </Item1>
            <p>Compra simples e segura</p>
          </BenefitContainer>

          <BenefitContainer>
            <Item2>
              <Package size={16} color="white" weight="fill" />
            </Item2>
            <p>Embalagem mantém o café intacto</p>
          </BenefitContainer>

          <BenefitContainer>
            <Item3>
              <Timer size={16} color="white" weight="fill" />
            </Item3>
            <p>Entrega rápida e rastreada</p>
          </BenefitContainer>

          <BenefitContainer>
            <Item4>
              <Coffee size={16} color="white" weight="fill" />
            </Item4>
            <p>O café chega fresquinho até você</p>
          </BenefitContainer>
        </ItemContainer>
      </LeftContainer>

      <ImageContainer src={coffeehome} />
    </IntroContainer>
  )
}
