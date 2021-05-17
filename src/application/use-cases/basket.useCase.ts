import { Basket } from '../../domain/entities/basket.entity'
import { Product } from '../../domain/entities/product.entity'
import { BasketPort } from '../port/basket.port'

export class BasketUseCase {
  constructor(private readonly basketPort: BasketPort) {}

  hasProduct(basket: Basket, product: Product) {
    return this.basketPort.hasProduct(basket, product)
  }

  createBasket(product: Product) {
    return this.basketPort.createBasket(product)
  }

  increaseBasket(basket: Basket, product: Product): Basket {
    return this.basketPort.increaseBasket(basket, product)
  }

  addProductToBasket(product: Product, basket?: Basket | null): Basket {
    return this.basketPort.addProductToBasket(product, basket)
  }
}
