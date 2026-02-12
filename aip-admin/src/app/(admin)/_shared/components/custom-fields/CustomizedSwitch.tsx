import React from 'react'

import { Switch } from '@mui/material'

import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'

interface StatusSwitchProps {
  control: Control<any> // Adjust the type according to your form data type
  name: string
  ariaLabel?: string
}

const StatusSwitch: React.FC<StatusSwitchProps> = ({ control, name, ariaLabel = 'controlled' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          checked={field.value}
          onChange={event => field.onChange(event.target.checked)}
          inputProps={{ 'aria-label': ariaLabel }}
        />
      )}
    />
  )
}

export default StatusSwitch
