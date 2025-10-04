export async function base64ToFile(base64: string, mimeType: string) {
  const url = base64.startsWith('data:')
    ? base64
    : `data:${mimeType};base64,${base64}`
  const blob = await (await fetch(url)).blob()
  return new File([blob], 'photo', { type: mimeType })
}
