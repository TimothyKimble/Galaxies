import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SpeciesService {
  async getAll(query = {}) {
    return await dbContext.Species.find(query)
  }

  async getById(id) {
    const species = await dbContext.Species.findById(id)
    if (!species) {
      throw new BadRequest('Invalid Id')
    }
    return species
  }

  async create(body) {
    return await dbContext.Species.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const species = await dbContext.Species.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return species
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Species.findByIdAndDelete(id)
  }
}

export const speciesService = new SpeciesService()
