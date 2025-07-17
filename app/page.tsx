'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

const products = [
  { id: '1', name: 'Nike Jordan', image: '/img/1.png', price: 100, bg: 'bg-[#7B1E3B]' },
  { id: '2', name: 'Nike Air', image: '/img/2.png', price: 200, bg: 'bg-gray-300' },
  { id: '3', name: 'Nike Is', image: '/img/3.png', price: 300, bg: 'bg-neutral-500' },     
  { id: '4', name: 'Nike Jordan WH', image: '/img/4.png', price: 400, bg: 'bg-black' },
]

export default function HomePage() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="flex h-screen overflow-hidden">
      {products.map((product) => {
        const isHovered = hovered === product.id

        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className={clsx(
              'relative transition-all duration-300 ease-in-out overflow-hidden group',
              isHovered
                ? 'w-[45%]'
                : hovered
                  ? 'w-[18%]'
                  : 'w-1/4'
            )}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              layoutId={`product-image-${product.id}`}
              className={clsx('h-full w-full relative', product.bg)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-300 rotate-15 group-hover:scale-105"
              />
            </motion.div>

            <div className="absolute bottom-4 left-4 z-10 text-white">
              <motion.h2
                layoutId={`product-name-${product.id}`}
                className="text-xl font-bold drop-shadow"
              >
                {product.name}
              </motion.h2>
              <motion.p
                layoutId={`product-price-${product.id}`}
                className="text-lg drop-shadow"
              >
                {product.price} ₸
              </motion.p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
