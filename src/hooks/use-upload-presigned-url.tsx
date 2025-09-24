import {
  getUploadPresignedUrl,
  uploadFileToPresignedUrl
} from '@/services/upload-service'
import { useMutation } from '@tanstack/react-query'

export function useUploadPresignedUrl() {
  return useMutation({
    mutationFn: getUploadPresignedUrl
  })
}

export function useUploadFileToPresignedUrl() {
  return useMutation({
    mutationFn: uploadFileToPresignedUrl
  })
}
