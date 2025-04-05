import { TrpcProvider } from "./lib/trpc"
import { AllPosts } from "./components/AllPosts"

export const App = () => {
  return (
    <TrpcProvider>
      <AllPosts />
    </TrpcProvider>
  )
}