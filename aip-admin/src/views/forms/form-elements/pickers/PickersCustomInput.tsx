// ** React Imports
import { forwardRef } from 'react'

import CustomTextField from '@/@core/components/mui/TextField'

// ** Custom Component Import

interface PickerProps {
  label?: string
  readOnly?: boolean
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // ** Props
  const { label, readOnly } = props

  return (
    <CustomTextField
      {...props}
      inputRef={ref}
      label={label || ''}
      {...(readOnly && { inputProps: { readOnly: true } })}
    />
  )
})

export default PickersComponent
