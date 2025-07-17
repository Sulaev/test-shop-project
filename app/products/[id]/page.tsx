'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const product = {
  id: '1',
  name: 'Product 1',
  image: '/img/product-1.jpg',
  description: 'Описание товара...',
  price: 123,
}

export default function ProductPage() {
  const router = useRouter()

  return (
    <div className="relative">
      <motion.div
        className="fixed inset-0 bg-black/40 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div layoutId={`product-image-${product.id}`} className="w-full h-72 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-t-lg -mt-8 relative z-10"
      >
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="mt-4 font-semibold text-lg">{product.price} ₸</p>

        <button
          onClick={() => router.back()}
          className="mt-6 text-blue-600 hover:underline"
        >
          Назад
        </button>
      </motion.div>
    </div>
  )
}
