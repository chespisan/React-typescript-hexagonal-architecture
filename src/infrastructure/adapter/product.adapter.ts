import { ProductPort } from '../../application/port/product.port'
import { Product } from '../../domain/entities/product.entity'
import { ProductRepository } from '../repositories/product.repository'

export class ProductAdapter implements ProductPort {
  private productRepository: ProductRepository

  constructor() {
    this.productRepository = new ProductRepository()
  }

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getProducts()
  }
}
