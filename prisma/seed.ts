import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const products = [
    {
      name: 'Classic T-Shirt',
      description: 'A comfortable cotton t-shirt.',
      price: 299,
      stock: 100,
      images: ['https://placehold.co/600x400?text=T-Shirt'],
      isActive: true,
    },
    {
      name: 'Denim Jeans',
      description: 'Classic blue denim jeans.',
      price: 899,
      stock: 50,
      images: ['https://placehold.co/600x400?text=Jeans'],
      isActive: true,
    },
    {
      name: 'Sneakers',
      description: 'White casual sneakers.',
      price: 1299,
      stock: 30,
      images: ['https://placehold.co/600x400?text=Sneakers'],
      isActive: true,
    },
  ]

  for (const p of products) {
    await prisma.product.create({
      data: p,
    })
  }

  console.log('Seed data inserted.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
