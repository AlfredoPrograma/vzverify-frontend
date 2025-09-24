import {
  getUploadPresignedUrl,
  uploadFileToPresignedUrl
} from '@/services/upload-service'
import { useMutation } from '@tanstack/react-query'

function useUploadFileToPresignedUrl() {
  return useMutation({
    mutationFn: uploadFileToPresignedUrl
  })
}

export function useUploadFile(file: File) {
  const { mutate: uploadFile } = useUploadFileToPresignedUrl()

  return useMutation({
    mutationFn: getUploadPresignedUrl,
    onSuccess: ({ url }) => {
      uploadFile({ file, presignedUrl: url })
    }
  })
}
