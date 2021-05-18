import * as uuid from 'uuid'

export class UuidService {
  generateUuid(): string {
    return uuid.v4()
  }
}
