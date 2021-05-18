import { Product } from './product.entity'

export interface Basket {
  id: string
  items: Product[]
}
