'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'
import { products } from '@/constants/products'

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
              'relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden group',
              isHovered ? 'w-[45%]' : hovered ? 'w-[18%]' : 'w-1/4'
            )}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={clsx('h-full w-full relative', product.bg)}>
              <motion.div
                layoutId={`bg-${product.id}`}
                className={clsx('absolute inset-0', product.bg)}
              />
              <motion.div
                layoutId={`image-${product.id}`}
                className="absolute inset-0"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            <div className="absolute bottom-4 left-4 z-10 text-white">
              <motion.h2 
                className="text-xl font-bold drop-shadow"
              >
                {product.name}
              </motion.h2>
              <motion.p 
                className="text-lg drop-shadow"
              >
                {product.price} $
              </motion.p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}