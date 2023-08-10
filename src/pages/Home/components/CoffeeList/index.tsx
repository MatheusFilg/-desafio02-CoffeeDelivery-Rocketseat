import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListBody, CoffeeListContainer, CoffeeListHeader } from './styles'

const coffees = [
  {
    id: 1,
    tag: ['TRADICIONAL'],
    name: 'Expresso Tradicional',

    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: 'https://i.imgur.com/78mQ6pf.png',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tag: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: 'https://i.imgur.com/biiHcDc.png',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tag: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: 'https://i.imgur.com/4xeGWms.png',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tag: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: 'https://i.imgur.com/jBEEMIK.png',
  },
  {
    id: 5,
    name: 'Café com Leite',
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: 'https://i.imgur.com/EXAST8e.png',
  },
  {
    id: 6,
    name: 'Latte',
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: 'https://i.imgur.com/ATkEPYB.png',
  },
  {
    id: 7,
    name: 'Capuccino',
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: 'https://i.imgur.com/0DaZcKE.png',
  },
  {
    id: 8,
    name: 'Macchiato',
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: 'https://i.imgur.com/h8mlGJF.png',
  },
  {
    id: 9,
    name: 'Mocaccino',
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: 'https://i.imgur.com/KMg6prE.png',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tag: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: 'https://i.imgur.com/skwrHL1.png',
  },
  {
    id: 11,
    name: 'Cubano',
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: 'https://i.imgur.com/QxDjVvE.png',
  },
  {
    id: 12,
    name: 'Havaiano',
    tag: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: 'https://i.imgur.com/w7fylrK.png',
  },
  {
    id: 13,
    name: 'Árabe',
    tag: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: 'https://i.imgur.com/O4Ecs5u.png',
  },
  {
    id: 14,
    name: 'Irlandês',
    tag: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: 'https://i.imgur.com/Ckxqaea.png',
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h1>Nossos Cafés</h1>
      </CoffeeListHeader>

      <CoffeeListBody>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
        {/* map da minha const que está nessa pagina com a 
        informação de todos os cafés, isso poderia ser um arquivo de "data" */}
      </CoffeeListBody>
    </CoffeeListContainer>
  )
}
