import { useState } from 'react'

const steps = {
  1: {
    title: 'Upload ID Photo',
    description: 'Upload a clear photo of your government-issued ID.'
  },
  2: {
    title: 'Upload Selfie',
    description: 'Take a selfie to verify your identity.'
  },
  3: {
    title: 'Review & Submit',
    description: 'Review your information and submit for verification.'
  }
} as const

type Step = keyof typeof steps

type Photos = {
  id: string | null
  selfie: string | null
}

export function UploadPhotosView() {
  const [step, setStep] = useState<Step>(1)
  const [photos, setPhotos] = useState<Photos>({ id: null, selfie: null })

  const stepData = steps[step]

  return (
    <div>
      <header className='text-center'>
        <h1>{stepData.title}</h1>
        <p>{stepData.description}</p>
      </header>
    </div>
  )
}
