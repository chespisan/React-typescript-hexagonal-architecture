import React, { useState } from 'react'

import { Basket } from '../../domain/entities/basket.entity'
import { Product } from '../../domain/entities/product.entity'
import { BasketUseCase } from '../../application/use-cases/basket.useCase'
import { BasketAdapter } from '../adapter/basket.adapter'
import { appProps } from './interfaces/app.interface'
import ProductList from './components/product-list/ProductList'

const App: React.FC<appProps> = ({ msg }) => {
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

export default App
