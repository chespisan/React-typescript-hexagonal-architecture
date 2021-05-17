import React, { useEffect, useState } from 'react'
import { Product } from '../../../../domain/entities/product.entity'
import { ProductUseCase } from '../../../../application/use-cases/productUseCase'
import { ProductAdapter } from '../../../adapter/product.adapter'
import { ProductListProps } from '../../interfaces/productList.interface'

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([])
  let productAdapter = new ProductAdapter()

  const productUseCase = async () => {
    let productUseCase = new ProductUseCase(productAdapter)
    setProducts(await productUseCase.getProducts())
  }

  useEffect(() => {
    productUseCase()
  }, [])

  return (
    <ul>
      {products.map((product: Product, index: number) => (
        <li key={index}>
          <button onClick={() => onSelectProduct(product)}>
            {product.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
