import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.getAll(req.query)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const moon = await moonsService.getById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const moon = await moonsService.edit(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await moonsService.destroy(req.params.id)
      res.send({ message: 'Unlimited Power' })
    } catch (error) {
      next(error)
    }
  }
}
