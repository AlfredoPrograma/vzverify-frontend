import { FileUploader } from '@/components/file-uploader'
import { ImagePreview } from '@/components/image-preview'
import { useState, type ChangeEvent } from 'react'

export function UploadPhotosView() {
  const [idPhoto, setIdPhoto] = useState<File | null>(null)

  function handleFileInput(event: ChangeEvent<HTMLInputElement>) {
    const [files] = event.target.files ?? []
    setIdPhoto(files ?? null)
  }

  return (
    <div className='w-full p-6'>
      {idPhoto ? (
        <ImagePreview imageFile={idPhoto} />
      ) : (
        <FileUploader
          text='Upload your ID photo'
          helperText='Click here to browse your files'
          onChange={handleFileInput}
        />
      )}
    </div>
  )
}
