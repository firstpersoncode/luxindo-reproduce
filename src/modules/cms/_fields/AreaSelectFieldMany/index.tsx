'use client'

import { LOCATIONS } from '@/modules/options'
import { useField, useFieldProps } from '@payloadcms/ui'
import { useEffect, useMemo, useState } from 'react'
import Select from 'react-select'

const LocationSelectFieldMany: React.FC<{ path: string; childPath?: string }> = (
  {
    // path,
    // childPath,
  },
) => {
  const { path } = useFieldProps()
  const { value, setValue } = useField<string>({ path })
  const [values, setValues] = useState([
    ...(value ?? '')
      .split(',')
      .filter(Boolean)
      .map((v) => ({ label: v, value: v })),
  ])
  const options = useMemo(() => LOCATIONS.map((l) => ({ label: l.label, value: l.value })), [])

  return (
    <div style={{ marginBottom: '18px' }}>
      <label className="field-label">Area</label>
      <Select
        styles={{
          menuList: (baseStyles: any) => ({
            ...baseStyles,
            color: '#000',
          }),
        }}
        value={values}
        isMulti
        options={options}
        isClearable
        isSearchable
        onChange={(v: any) => {
          setValues(v)
          setValue(v.map((i: any) => i.value).join(','))
        }}
      />
    </div>
  )
}

export default LocationSelectFieldMany
