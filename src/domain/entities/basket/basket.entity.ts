import { Product } from '../product/product.entity'

export interface Basket {
  id: string
  items: Product[]
}
