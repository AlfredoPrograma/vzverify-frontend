import { Button } from '@/components/ui/button'
import { type ComponentRef, type RefObject } from 'react'
import Webcam from 'react-webcam'

type PhotoCaptureSectionProps = {
  webcamRef: RefObject<ComponentRef<typeof Webcam>>
  onCapture: () => void
  buttonText: string
}

export function PhotoCaptureSection({
  webcamRef,
  onCapture,
  buttonText
}: PhotoCaptureSectionProps) {
  return (
    <>
      <Webcam ref={webcamRef} />

      <Button onClick={onCapture}>{buttonText}</Button>
    </>
  )
}
