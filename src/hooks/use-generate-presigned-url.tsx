import {
  presignUploadUrl,
  type PresignUploadUrlParams
} from '@/services/upload-photos'
import { useMutation } from '@tanstack/react-query'

export function useGeneratePresignedUrl() {
  return useMutation({
    mutationFn: (params: PresignUploadUrlParams) => presignUploadUrl(params)
  })
}
