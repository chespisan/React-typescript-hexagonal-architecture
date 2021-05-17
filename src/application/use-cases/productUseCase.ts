import { ProductPort } from '../port/product.port'

export class ProductUseCase {
  constructor(private readonly product: ProductPort) {}

  getProducts() {
    return this.product.getProducts()
  }
}
