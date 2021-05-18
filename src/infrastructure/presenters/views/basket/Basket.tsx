import React, { useState } from 'react'
import { BasketUseCase } from '../../../../application/use-cases/basket/basket.useCase'
import { Basket } from '../../../../domain/entities/basket/basket.entity'
import { Product } from '../../../../domain/entities/product/product.entity'
import { BasketAdapter } from '../../../adapter/basket.adapter'
import ProductList from '../../components/product-list/ProductList'
import { appProps } from '../../interfaces/app.interface'

const Basket: React.FC<appProps> = ({ msg }) => {
  const [basket, setBasket] = useState<Basket | null>(null)
  const basketAdapter: BasketAdapter = new BasketAdapter()

  const addToCart = (product: Product) => {
    const basketUseCase = new BasketUseCase(basketAdapter)
    setBasket(basketUseCase.addProductToBasket(product, basket))
  }

  return (
    <div>
      <h1>{msg}</h1>
      <ProductList onSelectProduct={addToCart}></ProductList>
      {basket && <p>Items on Basket: {basket.items.length}</p>}
    </div>
  )
}

export default Basket
