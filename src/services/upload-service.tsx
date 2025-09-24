import { api } from '@/lib/api'
import axios from 'axios'

type UploadDirectory = 'faces' | 'ids'

type UploadPresignedUrlResponse = {
  key: string
  url: string
}

const UPLOAD_PRESIGNED_URL_ENDPOINT = '/uploads'

type GetUploadPresignedUrlParams = {
  directory: UploadDirectory
}

export async function getUploadPresignedUrl({
  directory
}: GetUploadPresignedUrlParams) {
  const response = await api.get<UploadPresignedUrlResponse>(
    `${UPLOAD_PRESIGNED_URL_ENDPOINT}/${directory}`
  )

  return response.data
}

type UploadFileToPresignedUrlParams = {
  presignedUrl: string
  file: File
}

export async function uploadFileToPresignedUrl({
  file,
  presignedUrl
}: UploadFileToPresignedUrlParams) {
  console.log(presignedUrl)

  const response = await axios.put(presignedUrl, file)
  return response.data
}
