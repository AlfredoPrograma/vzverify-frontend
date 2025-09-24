import { UploadIcon } from 'lucide-react'
import { useRef, type ComponentProps } from 'react'

type FileUploaderProps = {
  text: string
  helperText?: string
} & ComponentProps<'input'>

export function FileUploader({
  text,
  helperText,
  ...inputProps
}: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  function openFileDialog() {
    fileInputRef.current?.click()
  }

  return (
    <div className='space-y-6'>
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer group border-gray-300 hover:border-blue-400 hover:bg-gray-50`}
        onClick={openFileDialog}
      >
        <input
          {...inputProps}
          ref={fileInputRef}
          type='file'
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
            <h3 className='text-xl font-semibold text-gray-800'>{text}</h3>
            {helperText && <p className='text-gray-600'>{helperText}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
