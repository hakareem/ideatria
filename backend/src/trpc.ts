import { initTRPC } from '@trpc/server'

const posts = [
  { id: 1, name: 'Wick', description: 'Post Description...' },
  { id: 2, name: 'Mick', description: 'Post Description...' },
  { id: 3, name: 'Sick', description: 'Post Description...' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { posts }
  }),
})

export type TrpcRouter = typeof trpcRouter