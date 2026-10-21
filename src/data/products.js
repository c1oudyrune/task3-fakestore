import backpackBlack from '../assets/products/backpack-black.jpg'
import backpackBrown from '../assets/products/backpack-brown.jpg'
import flashlight from '../assets/products/flashlight.webp'
import hoodieBlack from '../assets/products/hoodie-black.webp'
import hoodieZip from '../assets/products/hoodie-zip.webp'

export const products = [
  {
    id: 1,
    title: 'Худи на молнии',
    price: 4990,
    category: 'Одежда',
    description:
      'Чёрное худи на молнии с капюшоном, двумя накладными карманами и эластичными манжетами. Мягкий материал и свободный крой — для прогулок и повседневных выходов.',
    image: hoodieZip,
    rating: { rate: 4.7, count: 24 },
  },
  {
    id: 2,
    title: 'Чёрный свитшот',
    price: 3490,
    category: 'Одежда',
    description:
      'Базовый чёрный свитшот прямого кроя с круглым воротом. Плотный трикотаж держит форму, длинные рукава с манжетами завершают силуэт.',
    image: hoodieBlack,
    rating: { rate: 4.4, count: 18 },
  },
  {
    id: 3,
    title: 'LED-фонарик',
    price: 1790,
    category: 'Аксессуары',
    description:
      'Светодиодный фонарик с несколькими режимами яркости, рифлёным корпусом и аккумулятором. Компактный размер — удобно держать в руке или рюкзаке.',
    image: flashlight,
    rating: { rate: 4.8, count: 31 },
  },
  {
    id: 4,
    title: 'Тактический рюкзак',
    price: 6490,
    category: 'Рюкзаки',
    description:
      'Тактический рюкзак тёмно-коричневого цвета с MOLLE-системой, регулируемыми лямками и объёмным основным отделением. Для города и выездов.',
    image: backpackBrown,
    rating: { rate: 4.6, count: 12 },
  },
  {
    id: 5,
    title: 'Городской рюкзак',
    price: 4290,
    category: 'Рюкзаки',
    description:
      'Городской чёрный рюкзак с большим передним карманом и молниями. Внутри достаточно места для ноутбука, документов и вещей на день.',
    image: backpackBlack,
    rating: { rate: 4.5, count: 27 },
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === Number(id))
}
