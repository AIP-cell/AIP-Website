// export function base64ToFile(base64String: any) {

//   // console.log('jjjj:::',base64String)
//     // Extract the MIME type and filename from the base64 string
//     const matches = base64String.match(/data:(.*?);name=(.*?);base64,(.*)/)

//     if (!matches || matches.length !== 3)
//       throw new Error('Invalid base64 string')
  
//     const mimeType = matches[1]
//     const filename = matches[2]
//     const base64Data = matches[3]
  
//     // Decode the base64 data
//     const byteString = atob(base64Data)
//     const byteNumbers = Array.from({ length: byteString.length })
  
//     for (let i = 0; i < byteString.length; i++)
//       byteNumbers[i] = byteString.charCodeAt(i)
  
//     const byteArray = new Uint8Array(byteNumbers)
  
//     return new File([new Blob([byteArray], { type: mimeType })], filename, {
//       type: mimeType,
//     })
//   }