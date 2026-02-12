export const customError = (status: any, message: any) => {
  const err = new Error()

  err.message = message

  return err
}

export const validationError = (message: string) => {
  const err = new Error()

  err.message = message

  return err
}

export const serverError = (error: any, message = 'Internal Server Error') => {
  console.error(message, error)
  const err = new Error()

  err.message = message

  return err
}
