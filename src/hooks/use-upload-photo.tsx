import {
  uploadPhotoToPresignedUrl,
  type UploadPhotoParams
} from '@/services/upload-photos'
import { useMutation } from '@tanstack/react-query'

export function useUploadPhoto() {
  return useMutation({
    mutationFn: (params: UploadPhotoParams) => uploadPhotoToPresignedUrl(params)
  })
}
