import { Basket } from "domain/entities/basket/basket.entity";
import { Product } from "domain/entities/product/product.entity";

export interface BasketRepository {
  hasProduct(basket: Basket, product: Product): Product | undefined
  createBasket(product: Product): Basket
  increaseBasket(basket: Basket, product: Product): Basket
  addProductToBasket(product: Product, basket?: Basket | null): Basket
}
