import { FastifyPlugin, FastifyRequest, FastifyReply, preHandlerHookHandler } from 'fastify';

export type FastifyAuthFunction = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: (error?: Error) => void
) => void;

type FastifyAuthOptions = {
  relation?: 'and' | 'or',
  run?: 'all'
}

declare module 'fastify' {
  interface FastifyInstance {
    auth(
      functions: FastifyAuthFunction[],
      options?: FastifyAuthOptions
    ): preHandlerHookHandler;
  }
}

declare const fastifyAuth: FastifyPlugin<FastifyAuthOptions>;
export default fastifyAuth;
