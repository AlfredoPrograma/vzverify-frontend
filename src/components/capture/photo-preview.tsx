type PhotoPreviewProps = {
  photo: string
}

export function PhotoPreview({ photo }: PhotoPreviewProps) {
  return (
    <div>
      <img
        src={photo}
        alt='Captured'
      />
    </div>
  )
}
