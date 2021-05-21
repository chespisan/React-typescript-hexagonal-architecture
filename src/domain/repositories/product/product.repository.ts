import { Product } from "domain/entities/product/product.entity";

export interface ProductRepository {
  getProducts(): Promise<Product[]>
}
