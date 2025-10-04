import { PhotoPreview } from '@/components/capture/photo-preview'
import { Button } from '@/components/ui/button'
import { useGeneratePresignedUrl } from '@/hooks/use-generate-presigned-url'
import { useUploadPhoto } from '@/hooks/use-upload-photo'
import { base64ToFile } from '@/lib/files'

type ReviewPhotosSectionProps = {
  idPhoto: string
  selfiePhoto: string
}

export function ReviewPhotosSection({
  idPhoto,
  selfiePhoto
}: ReviewPhotosSectionProps) {
  const { mutateAsync: generatePresignedUrl } = useGeneratePresignedUrl()
  const { mutateAsync: uploadPhoto } = useUploadPhoto()

  async function handleUpload() {
    const idPhotoUrl = (await generatePresignedUrl({ directory: 'ids' })).data
      .url
    const selfiePhotoUrl = (await generatePresignedUrl({ directory: 'faces' }))
      .data.url

    const idPhotoFile = await base64ToFile(idPhoto, 'image/jpeg')
    const selfiePhotoFile = await base64ToFile(selfiePhoto, 'image/jpeg')

    await uploadPhoto({ file: idPhotoFile, presignedUrl: idPhotoUrl })
    await uploadPhoto({ file: selfiePhotoFile, presignedUrl: selfiePhotoUrl })
  }

  return (
    <div>
      <div>
        <h3>ID Photo</h3>
        <PhotoPreview photo={idPhoto} />
      </div>
      <div>
        <h3>Selfie</h3>
        <PhotoPreview photo={selfiePhoto} />
      </div>

      <Button onClick={handleUpload}>Submit for Verification</Button>
    </div>
  )
}
