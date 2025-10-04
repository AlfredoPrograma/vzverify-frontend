type UploadStepHeaderProps = {
  title: string
  description: string
}

export function UploadStepHeader({ title, description }: UploadStepHeaderProps) {
  return (
    <header className='text-center'>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}
