import React, { useEffect, useState } from 'react'
import { Product } from 'domain/entities/product/product.entity'
import { ProductUseCase } from 'application/use-cases/product/productUseCase'
import { ProductListProps } from 'infrastructure/presenters/interfaces/productList.interface'
import { ProductService } from 'infrastructure/services/product.service'
import { AxiosService } from 'infrastructure/http/axiosHttp'

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([])
  let productAdapter = new ProductService(new AxiosService())

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
