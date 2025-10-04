import { PhotoPreview } from '@/components/capture/photo-preview'
import { Button } from '@/components/ui/button'
import { useRef, useState, type ComponentRef } from 'react'
import Webcam from 'react-webcam'

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
  const webcamRef = useRef<ComponentRef<typeof Webcam>>(null)

  const stepData = steps[step]
  const captureField = step === 1 ? 'id' : 'selfie'

  const onCapture = (photoField: keyof Photos, nextStep: Step) => {
    if (!webcamRef.current) {
      throw new Error('Webcam not available')
    }

    const imageSrc = webcamRef.current.getScreenshot()
    setPhotos((prev) => ({ ...prev, [photoField]: imageSrc }))
    setStep(nextStep)
  }

  return (
    <div>
      <header className='text-center'>
        <h1>{stepData.title}</h1>
        <p>{stepData.description}</p>
      </header>

      {step < 3 ? (
        <>
          <Webcam ref={webcamRef} />

          <Button onClick={() => onCapture(captureField, (step + 1) as Step)}>
            Capture {captureField === 'id' ? 'ID Photo' : 'Selfie'}
          </Button>
        </>
      ) : (
        <div>
          <div>
            <h3>ID Photo</h3>
            <PhotoPreview photo={photos.id!} />
          </div>
          <div>
            <h3>Selfie</h3>
            <PhotoPreview photo={photos.selfie!} />
          </div>

          <Button onClick={() => alert('Submitted!')}>
            Submit for Verification
          </Button>
        </div>
      )}
    </div>
  )
}
