import { BasketPort } from '../../application/port/basket.port'
import { Basket } from '../../domain/entities/basket.entity'
import { Product } from '../../domain/entities/product.entity'
import { UuidService } from '../utils/uuid/uuid'

export class BasketAdapter implements BasketPort {
  private uuidService: UuidService

  constructor() {
    this.uuidService = new UuidService()
  }

  hasProduct(basket: Basket, product: Product) {
    return basket.items.find((item) => item.id === product.id)
  }

  createBasket(product: Product) {
    return { id: this.uuidService.generateUuid(), items: [product] }
  }

  increaseBasket(basket: Basket, product: Product): Basket {
    return { ...basket, items: [...basket.items, product] }
  }

  addProductToBasket(product: Product, basket?: Basket | null): Basket {
    return basket
      ? this.hasProduct(basket, product)
        ? basket
        : this.increaseBasket(basket, product)
      : this.createBasket(product)
  }
}
