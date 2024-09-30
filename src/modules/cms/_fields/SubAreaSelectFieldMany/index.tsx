'use client'

import { LOCATIONS } from '@/modules/options'
import { useField, useFieldProps, useForm, useWatchForm } from '@payloadcms/ui'
import { useEffect, useMemo, useState } from 'react'
import Select from 'react-select'

const LocationSelectFieldMany: React.FC<{ path: string; parentPath: string }> = ({
  // path,
  parentPath,
}) => {
  const { path } = useFieldProps()
  const { getDataByPath } = useWatchForm()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _parentValue =
    (getDataByPath(path.replace('filter_sub_area', parentPath)) as string)
      ?.split(',')
      .filter(Boolean) ?? []

  const { value, setValue } = useField<string>({
    path,
  })

  const [values, setValues] = useState([
    ...(value ?? '')
      .split(',')
      .filter(Boolean)
      .map((v) => ({ label: v, value: v })),
  ])

  const options = useMemo(() => {
    if (!_parentValue?.length) return []
    return LOCATIONS.filter((item) => _parentValue.includes(item.value))
      .map((item) => item.children || [])
      .flat()
  }, [_parentValue])

  const disabled = useMemo(() => !options.length, [options])

  useEffect(() => {
    const notInOptions = values.filter((v) => !options.find((o) => o.value === v.value))
    if (notInOptions.length) {
      const filteredValues = values.filter((v) => !notInOptions.includes(v))
      setValues(filteredValues)
      setValue(filteredValues.map((i: any) => i.value).join(','))
    }
  }, [values, options, setValue])

  return (
    <div
      style={{
        marginBottom: '18px',
        opacity: !disabled ? 1 : 0.5,
        pointerEvents: !disabled ? 'auto' : 'none',
      }}
    >
      <label className="field-label">Sub Area</label>
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
