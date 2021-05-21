import React, { useState } from 'react'
import { BasketUseCase } from 'application/use-cases/basket/basket.useCase'
import { Product } from 'domain/entities/product/product.entity'
import { Basket } from 'domain/entities/basket/basket.entity'
import ProductList from 'infrastructure/presenters/components/product-list/ProductList'
import { appProps } from 'infrastructure/presenters/interfaces/app.interface'
import { BasketService } from 'infrastructure/services/basket.service'

const Basket: React.FC<appProps> = ({ msg }) => {
  const [basket, setBasket] = useState<Basket | null>(null)
  const basketService: BasketService = new BasketService()

  const addToCart = (product: Product) => {
    const basketUseCase = new BasketUseCase(basketService)
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
