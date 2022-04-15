import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Resource } from 'fastify-autoroutes'

export default (fastify: FastifyInstance) => <Resource> {
  get: {
    handler: async (request: FastifyRequest, reply: FastifyReply) => 'Hello, Route!'
  }
}