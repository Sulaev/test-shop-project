export type Product = {
  id: string
  name: string
  image: string
  price: number
  description: string
  details: string
  bgClass: string
  bg: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Jordan',
    image: '/img/1.png',
    price: 100,
    description: 'This iconic basketball model is crafted from 80 materials with modern durability.',
    details:
      'The Nike Jordan is designed for those who demand excellence on the court. Featuring a premium upper crafted from sustainable materials, it delivers unmatched ankle support and grip. Whether you’re playing or just showing off, these Jordans never miss.',
    bgClass: '#7B1E3B',
    bg: 'bg-[#7B1E3B]',
  },
  {
    id: '2',
    name: 'Nike Air',
    image: '/img/2.png',
    price: 200,
    description: 'Lightweight, responsive and versatile – a perfect everyday sneaker.',
    details:
      'Nike Air is built for comfort and performance, with a mesh upper for breathability and Air sole units for incredible cushioning. These shoes are made to move, perfect for urban adventures or long days on your feet.',
    bgClass: '#D1D5DB',
    bg: 'bg-gray-300',
  },
  {
    id: '3',
    name: 'Nike Is',
    image: '/img/3.png',
    price: 300,
    description: 'A futuristic silhouette built for bold statements.',
    details:
      'Crafted with innovative layering and forward-thinking materials, Nike Is is a fusion of fashion and performance. From high-end streetwear looks to high-performance movement — this model redefines sneaker culture.',
    bgClass: '#737373',
    bg: 'bg-neutral-500',
  },
  {
    id: '4',
    name: 'Nike Jordan WH',
    image: '/img/4.png',
    price: 400,
    description: 'A modern take on the legendary classic with a monochrome palette.',
    details:
      'White on white never looked so fierce. The WH edition of Nike Jordan balances heritage styling with modern material upgrades. Ideal for collectors and everyday trendsetters alike.',
    bgClass: '#000000',
    bg: 'bg-black',
  },
  {
    id: '5',
    name: 'Nike Is',
    image: '/img/5.png',
    price: 300,
    description: 'Comfort meets innovation in this fresh, subtle look.',
    details:
      'The pistachio-toned Nike Is is your go-to for understated luxury. Designed with layered cushioning and breathable fabric, it’s perfect for daily wear with an edge of premium style.',
    bgClass: '#CFEAD1',
    bg: 'bg-[#CFEAD1]',
  },
  {
    id: '6',
    name: 'Nike Jordan WH',
    image: '/img/6.png',
    price: 400,
    description: 'Command attention with every step in vibrant orange.',
    details:
      'This bold orange Nike Jordan WH is designed to stand out. With durable leather overlays, padded collar, and responsive midsoles, it’s made for athletes and creatives alike who walk their own path.',
    bgClass: '#FFA500',
    bg: 'bg-[#FFA500]',
  },
]
