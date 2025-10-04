import { api } from '@/lib/api'

const PRESIGN_URL_ENDPOINT = '/uploads'

export type PresignUploadDirectory = 'ids' | 'faces'

export type PresignUploadUrlParams = {
  directory: PresignUploadDirectory
}

export type PresignUploadUrlResponse = {
  url: string
  key: string
}

export function presignUploadUrl({ directory }: PresignUploadUrlParams) {
  return api.get<PresignUploadUrlResponse>(
    `${PRESIGN_URL_ENDPOINT}/${directory}`
  )
}

export type UploadPhotoParams = {
  presignedUrl: string
  file: File
}

export function uploadPhotoToPresignedUrl({
  presignedUrl,
  file
}: UploadPhotoParams) {
  return api.put(presignedUrl, file)
}
