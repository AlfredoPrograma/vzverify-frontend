import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import { BaseLayout } from '@/layouts/base-layout'
import { UploadPhotosView } from '@/views/upload-photos-view'

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
