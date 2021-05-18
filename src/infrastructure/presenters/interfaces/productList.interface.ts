import { Product } from '../../../domain/entities/product/product.entity'

export interface ProductListProps {
  onSelectProduct: (product: Product) => void
}
