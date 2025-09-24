import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import { BaseLayout } from '@/layouts/BaseLayout'
import { UploadPhotosView } from '@/views/UploadPhotosView'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route
              index
              element={<UploadPhotosView />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
