import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-2xl'>Hello world</h1>
    </QueryClientProvider>
  )
}
