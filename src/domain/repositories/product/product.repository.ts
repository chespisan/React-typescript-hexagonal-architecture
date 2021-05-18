import { Product } from '../../entities/product/product.entity'

export interface ProductRepository {
  getProducts(): Promise<Product[]>
}
