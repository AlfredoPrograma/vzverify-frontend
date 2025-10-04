import { PhotoCaptureSection } from '@/components/upload-photos/photo-capture-section'
import { ReviewPhotosSection } from '@/components/upload-photos/review-photos-section'
import { UploadStepHeader } from '@/components/upload-photos/photo-step-header'
import { useRef, useState, type ComponentRef, type RefObject } from 'react'
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
  const buttonText =
    captureField === 'id' ? 'Capture ID Photo' : 'Capture Selfie'

  const handleCapture = (photoField: keyof Photos) => {
    if (!webcamRef.current) {
      throw new Error('Webcam not available')
    }

    const imageSrc = webcamRef.current.getScreenshot()
    setPhotos((prev) => ({ ...prev, [photoField]: imageSrc }))
    setStep((currentStep) => (currentStep + 1) as Step)
  }

  return (
    <div>
      <UploadStepHeader
        title={stepData.title}
        description={stepData.description}
      />

      {step < 3 ? (
        <PhotoCaptureSection
          webcamRef={webcamRef as RefObject<ComponentRef<typeof Webcam>>}
          onCapture={() => handleCapture(captureField)}
          buttonText={buttonText}
        />
      ) : (
        <ReviewPhotosSection
          idPhoto={photos.id!}
          selfiePhoto={photos.selfie!}
          onSubmit={() => alert('Submitted!')}
        />
      )}
    </div>
  )
}
