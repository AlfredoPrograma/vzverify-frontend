type ImagePreviewProps = {
  imageFile: File
}

export function ImagePreview({ imageFile }: ImagePreviewProps) {
  const imageUrl = URL.createObjectURL(imageFile)

  return (
    <div className='relative w-full h-64'>
      <img
        src={imageUrl}
        alt='Uploaded Preview'
        className='object-fill w-full h-full rounded-xl'
      />
    </div>
  )
}
