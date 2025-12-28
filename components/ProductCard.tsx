import React from 'react'
import { Product } from '@prisma/client'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-gray-100 rounded-md mb-4 overflow-hidden">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">${product.price.toLocaleString()}</span>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
