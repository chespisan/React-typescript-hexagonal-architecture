import { Basket } from "domain/entities/basket/basket.entity"
import { Product } from "domain/entities/product/product.entity"
import { BasketRepository } from "domain/repositories/basket/basket.repository"

export class BasketUseCase {
  constructor(private readonly basketPort: BasketRepository) {}

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
