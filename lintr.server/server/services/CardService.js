import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CardService {
  async find(query = {}) {
    const Card = await dbContext.Card.find(query)
    return Card
  }

  async findById(id) {
    const card = await dbContext.Card.findById(id)
    if (!card) {
      throw new BadRequest('Invalid Id')
    }
    return card
  }
}

export const cardService = new CardService()
