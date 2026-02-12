// fileUtils.ts
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'

export const processFile = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = Date.now() + file.name.replaceAll(' ', '_')
  const uploadDir = path.join(process.cwd(), 'uploads')

  await mkdir(uploadDir, { recursive: true })
  const filePath = path.join(uploadDir, filename)

  await writeFile(filePath, buffer)

  return `/uploads/${filename}`
}

export const processFiles = async (files: File[]): Promise<string[]> => {
  const uploadDir = path.join(process.cwd(), 'uploads')

  await mkdir(uploadDir, { recursive: true })

  const imagePaths: string[] = []

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = Date.now() + file.name.replaceAll(' ', '_')
    const filePath = path.join(uploadDir, filename)

    await writeFile(filePath, buffer)
    imagePaths.push(`/uploads/${filename}`)
  }

  return imagePaths
}
