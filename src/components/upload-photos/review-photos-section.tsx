import { PhotoPreview } from '@/components/capture/photo-preview'
import { Button } from '@/components/ui/button'

type ReviewPhotosSectionProps = {
  idPhoto: string
  selfiePhoto: string
  onSubmit: () => void
}

export function ReviewPhotosSection({ idPhoto, selfiePhoto, onSubmit }: ReviewPhotosSectionProps) {
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

      <Button onClick={onSubmit}>Submit for Verification</Button>
    </div>
  )
}
