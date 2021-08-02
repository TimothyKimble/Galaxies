import { speciesService } from '../services/SpeciesService'
import BaseController from '../utils/BaseController'

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const species = await speciesService.getAll(req.query)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const species = await speciesService.getById(req.params.id)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const species = await speciesService.create(req.body)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const species = await speciesService.edit(req.body)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const species = await speciesService.destroy(req.params.id)
      res.send({ message: 'Unlimited Power' })
    } catch (error) {
      next(error)
    }
  }
}
