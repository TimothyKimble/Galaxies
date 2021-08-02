import { starsService } from '../services/StarsService'
import { galaxiesService } from '../services/GalaxiesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/stars', this.getStarsByGalaxyId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxiesService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getStarsByGalaxyId(req, res, next) {
    try {
      const stars = await starsService.getAll({ galaxyId: req.params.id })
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const galaxy = await galaxiesService.edit(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const galaxy = await galaxiesService.destroy(req.params.id)
      res.send({ message: 'The Dark Side is Strong with This One' })
    } catch (error) {
      next(error)
    }
  }
}
