'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc', // Assuming createdAt exists, wait, let me check schema again.
      },
    })
    return products
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return []
  }
}

export async function createProduct(data: {
  name: string
  description?: string
  price: number
  stock: number
  images: string[]
}) {
  try {
    const product = await prisma.product.create({
      data: {
        ...data,
        isActive: true,
      },
    })
    return product
  } catch (error) {
    console.error('Failed to create product:', error)
    throw new Error('Failed to create product')
  }
}
