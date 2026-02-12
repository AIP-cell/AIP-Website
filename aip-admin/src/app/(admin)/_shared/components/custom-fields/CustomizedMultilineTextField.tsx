import React from 'react'

import { TextField } from '@mui/material'

function CustomizedMultilineTextField({
  register,
  errors,
  name,
  placeholder
}: {
  register: any
  errors: any
  name: string
  placeholder: string
}) {
  return (
    <>
      <TextField
        multiline
        minRows={3}
        maxRows={10}
        style={{ width: '100%', resize: 'vertical', borderRadius: '5px', borderColor: 'grey' }}
        placeholder={placeholder}
        {...register(name, { required: 'Description is required' })}
      />
      {errors[name] && <p style={{ color: 'red', fontSize: 'small' }}>{`${errors[name].message}`}</p>}
    </>
  )
}

export default CustomizedMultilineTextField
