import { Product } from '../../../domain/entities/product.entity'

export interface ProductListProps {
  onSelectProduct: (product: Product) => void
}
