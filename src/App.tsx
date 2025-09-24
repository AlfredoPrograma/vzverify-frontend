import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UploadPhotosView } from '@/views/UploadPhotosView'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<UploadPhotosView />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
