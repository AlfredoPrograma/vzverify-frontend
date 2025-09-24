import { UploadIcon } from 'lucide-react'
import { useRef, useState, type ChangeEvent } from 'react'

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileInput(event: ChangeEvent<HTMLInputElement>) {
    const [files] = event.target.files ?? []
    setFile(files ?? null)
  }

  function openFileDialog(event: MouseEvent<HTMLDivElement, MouseEvent>) {
    fileInputRef.current?.click()
  }

  return (
    <div className='space-y-6'>
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer group border-gray-300 hover:border-blue-400 hover:bg-gray-50`}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type='file'
          onChange={handleFileInput}
          className='hidden'
        />

        <div className='flex flex-col items-center space-y-4'>
          <div
            className={`p-4 rounded-full transition-all duration-300 bg-gray-100 group-hover:bg-blue-100`}
          >
            <UploadIcon
              className={`w-12 h-12 transition-colors duration-300 text-gray-600 group-hover:text-blue-600 }`}
            />
          </div>

          <div className='space-y-2'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Upload your files
            </h3>
            <p className='text-gray-600'>Click here to browse your files</p>
          </div>
        </div>
      </div>
    </div>
  )
}
