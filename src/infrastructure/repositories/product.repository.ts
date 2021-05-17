import { Product } from '../../domain/entities/product.entity'
import { ProductDTO } from '../http/dto/ProductDTO'
import { HttpService } from '../http/http'

export class ProductRepository {
  private httpService: HttpService

  constructor() {
    this.httpService = new HttpService()
  }

  async getProducts() {
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
