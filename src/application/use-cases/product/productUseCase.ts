import { ProductRepository } from "domain/repositories/product/product.repository";

export class ProductUseCase {
  constructor(private readonly product: ProductRepository) {}

  getProducts() {
    return this.product.getProducts()
  }
}
