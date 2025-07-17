'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { products } from '@/constants/products'

export default function ProductPage() {
  const router = useRouter()
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedSize, setSelectedSize] = useState<number | null>(null)

  const [stage, setStage] = useState<'bg' | 'image' | 'details'>('bg')

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage('image'), 500),
      setTimeout(() => setStage('details'), 1000)
    ]
    return () => timeouts.forEach(clearTimeout)
  }, [])

  if (!product) return <div>Not found</div>

  const darkBg = ['bg-[#7B1E3B]', 'bg-black', 'bg-neutral-500'].includes(product.bg)
  const sizes = [38, 39, 40, 41, 42]

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
    >
      <motion.div
        layoutId={`bg-${product.id}`}
        className={`absolute inset-0 ${product.bg} z-0`}
      />

      <motion.button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-30 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'details' ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="text-white" />
      </motion.button>

      <div className="relative z-20 flex flex-1 h-full items-center px-12">
        <AnimatePresence mode="wait">
          {stage !== 'bg' && (
            <motion.div
              key="shoe"
              layoutId={`image-${product.id}`}
              className="relative w-[600px] h-[600px] flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {stage === 'details' && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="ml-16 max-w-xl flex flex-col gap-6"
          >
            <h1 className={`text-5xl font-bold ${darkBg ? 'text-white/90' : 'text-black/80'} drop-shadow-lg`}>
              {product.name}
            </h1>

            <div className={`w-20 h-[2px] ${darkBg ? 'bg-white/30' : 'bg-black/20'}`} />

            <p className={`text-lg ${darkBg ? 'text-white/90' : 'text-black/80'}`}>
              {product.description}
            </p>

            <p className={`text-sm leading-relaxed ${darkBg ? 'text-white/70' : 'text-black/70'}`}>
              {product.details}
            </p>
          </motion.div>
        )}
      </div>

      {stage === 'details' && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 w-full bg-white rounded-t-3xl p-12 flex justify-between shadow-2xl z-10"
        >
          <p className="text-5xl font-extrabold text-black">{product.price} $</p>

          <div className="flex gap-5 items-center">
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded-md border font-semibold cursor-pointer
                    ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              style={{ backgroundColor: product.bgClass }}
              className="text-white px-8 py-4 rounded-lg text-xl font-semibold hover:brightness-90 transition-colors"
            >
              Buy
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
