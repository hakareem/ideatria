import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from '@ideatria/backend/src/trpc';
import { QueryClient } from '@tanstack/react-query';

export const trpc = createTRPCReact<AppRouter>()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
    }
  } 
});

const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
        })
    ]
})

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            {children}
        </trpc.Provider>
    )
}