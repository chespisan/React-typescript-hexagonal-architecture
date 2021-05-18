import { ProductRepository } from '../../domain/repositories/product/product.repository'
import { Product } from '../../domain/entities/product/product.entity'
import { ProductService } from '../services/product/product.service'

export class ProductAdapter implements ProductRepository {
  private productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts()
  }
}
