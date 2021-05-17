import { Basket } from '../../domain/entities/basket.entity'
import { Product } from '../../domain/entities/product.entity'

export interface BasketPort {
  hasProduct(basket: Basket, product: Product): Product | undefined
  createBasket(product: Product): Basket
  increaseBasket(basket: Basket, product: Product): Basket
  addProductToBasket(product: Product, basket?: Basket | null): Basket
}
