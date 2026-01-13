/**
 * Converts a canvas element into a Base64 data URL.
 * @param canvas - The HTMLCanvasElement to convert.
 * @param type - The image MIME type (default is "image/png").
 * @param quality - Image quality (only used for image/jpeg or image/webp, between 0 and 1).
 * @returns A Base64-encoded data URL string.
 */
export default function canvasToBase64(
  canvas: HTMLCanvasElement,
  type: string = "image/png",
  quality?: number
): string {
  return canvas.toDataURL(type, quality);
}