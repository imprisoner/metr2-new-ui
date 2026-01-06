/**
 * Converts a File (image) into a Base64 data URL.
 * @param file - The image file to convert.
 * @returns A Promise that resolves to the Base64 string (data URL).
 */
export default function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // When reading is successful, resolve with the Base64 string
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("Failed to convert file to base64."));
      }
    };

    // Handle errors
    reader.onerror = (error) => reject(error);

    // Read file as Data URL (base64)
    reader.readAsDataURL(file);
  });
}