import { Product } from '../../domain/entities/product.entity'

export interface ProductPort {
  getProducts(): Promise<Product[]>
}
