import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouter } from '@ideatria/backend/src/trpc'
import { QueryClient } from '@tanstack/react-query';

export const trpc = createTRPCReact<TrpcRouter>()

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
    }
  } 
});