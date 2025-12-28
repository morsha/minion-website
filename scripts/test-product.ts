import { getProducts, createProduct } from '../app/actions/product'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testProductFlow() {
  console.log('🚀 Starting Product Flow Test...')

  // --- Test 1: Create Product ---
  console.log('\n1️⃣ Testing createProduct()...')
  const newProductData = {
    name: 'Test Product ' + Date.now(),
    description: 'Created via test script',
    price: 999,
    stock: 10,
    images: ['https://placehold.co/600x400?text=Test'],
  }

  const createdProduct = await createProduct(newProductData)

  if (!createdProduct || !createdProduct.id) {
    throw new Error('Failed to create product')
  }
  if (createdProduct.name !== newProductData.name) {
    throw new Error('Created product name mismatch')
  }
  console.log('✅ Product created:', createdProduct.name)


  // --- Test 2: Get Products ---
  console.log('\n2️⃣ Testing getProducts()...')

  // 1. Fetch products
  const products = await getProducts()

  // 2. Assertions
  if (!Array.isArray(products)) {
    throw new Error('Expected products to be an array')
  }

  console.log(`Fetched ${products.length} products.`)

  // Verify the newly created product is in the list
  const found = products.find(p => p.id === createdProduct.id)
  if (!found) {
    throw new Error('Newly created product not found in list')
  }
  console.log('✅ Found newly created product in list')

  if (products.length === 0) {
    console.warn('Warning: No products found. Did seeding work?')
  } else {
    const firstProduct = products[0]
    if (!firstProduct.id || !firstProduct.name) {
      throw new Error('Product structure is incorrect')
    }
    console.log('First product in list:', firstProduct.name)
  }

  console.log('\n🎉 All product tests passed.')
}

testProductFlow()
  .catch((e) => {
    console.error('❌ Test failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
