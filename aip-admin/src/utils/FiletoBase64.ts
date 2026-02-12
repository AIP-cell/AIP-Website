export function fileToBase64(file: any) {
  console.log('file:::', file)
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
  
      reader.onload = () => {
        const base64String = (reader.result as any).split(',')[1] // Get the base64 part
        const mimeType = file.type
        const fileName = file.name
  
        const fullBase64String = `data:${mimeType};name=${fileName};base64,${base64String}`
  
        resolve(fullBase64String)
      }
  
      reader.onerror = error => reject(error)
      reader.readAsDataURL(file)
    })
  }