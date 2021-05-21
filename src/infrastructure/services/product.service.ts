import { Product } from 'domain/entities/product/product.entity'
import { ProductRepository } from 'domain/repositories/product/product.repository'
import { ProductDTO } from 'infrastructure/http/dto/ProductDTO'
import { HttpRepository } from 'infrastructure/repositories/http/http.repository'

export class ProductService implements ProductRepository {
  constructor(private readonly httpService: HttpRepository) {}

  async getProducts(): Promise<Product[]> {
    const { data: products }: any = await this.httpService.get<ProductDTO[]>(
      'http://localhost:3001/products',
    )

    return products.map(
      (productDTO: any): Product => ({
        id: productDTO.product_id,
        title: productDTO.title,
        price: Number(productDTO.price),
      }),
    )
  }
}
