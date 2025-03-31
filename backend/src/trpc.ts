import { initTRPC } from '@trpc/server'

const posts = [
  { id: 1, name: 'Wick', description: 'Post Description...' },
  { id: 2, name: 'Mick', description: 'Post Description...' },
  { id: 3, name: 'Sick', description: 'Post Description...' },
]

const trpc = initTRPC.create()
const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts }
  }),
})

export type trpcRouter = typeof trpcRouter
