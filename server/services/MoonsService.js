import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonsService {
  async getAll(query = {}) {
    const moons = await dbContext.Moons.find(query)
    return moons
  }

  async getById(id) {
    const moon = await dbContext.Moons.findById(id)
    if (!moon) {
      throw new BadRequest('Invalid Id')
    }
    return moon
  }

  async create(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }

  async edit(body) {
    await this.getById(body.id)
    const moon = await dbContext.Moons.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return moon
  }

  async destroy(id) {
    await this.getById(id)
    const moon = await dbContext.Moons.findByIdAndDelete(id)
    if (!moon) {
      throw new BadRequest('Thats No Moon')
    }
    return moon
  }
}

export const moonsService = new MoonsService()
