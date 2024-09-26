'use client'

import { LOCATIONS } from '@/modules/options'
import { SelectInput, useField } from '@payloadcms/ui'
import { useMemo } from 'react'

const LocationSelectField: React.FC<{ path: string; childPath: string }> = ({
  path,
  childPath,
}) => {
  const { value, setValue } = useField<string>({ path })
  const { setValue: _setChildValue } = useField<string>({ path: childPath })
  const options = useMemo(() => LOCATIONS.map((l) => ({ label: l.label, value: l.value })), [])

  return (
    <div style={{ marginBottom: '18px' }}>
      <label className="field-label">Area</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={(e: any) => {
          setValue(e?.value)
          _setChildValue(null)
        }}
      />
    </div>
  )
}

export default LocationSelectField
