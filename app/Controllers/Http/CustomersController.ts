import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async index({ response }: HttpContextContract) {
    try {
      const result = await Customer.all()
      return response.ok({
        code: 200,
        status: 'ok',
        messages: 'get list all customer successfully',
        data: result,
      })
    } catch (error) {
      return response.internalServerError({ error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const req = request.only(['name', 'email'])

    const result = await Customer.create(req)

    return response.created({
      code: 201,
      status: 'ok',
      messages: 'create customer successfully',
      data: result,
    })
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
