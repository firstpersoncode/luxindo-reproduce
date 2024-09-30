'use client'

import { LOCATIONS } from '@/modules/options'
import { useField, useWatchForm } from '@payloadcms/ui'
import { useEffect, useMemo } from 'react'

const LocationSelectField: React.FC<{ path: string; parentPath: string }> = ({
  path,
  parentPath,
}) => {
  const { getDataByPath } = useWatchForm()
  const _parentValue = getDataByPath(parentPath)

  const { value, setValue } = useField<string>({
    path,
  })

  const options = useMemo(() => {
    if (!_parentValue) return []
    return LOCATIONS.find((item) => item.value === _parentValue)?.children ?? []
  }, [_parentValue])

  useEffect(() => {
    if (!_parentValue) setValue(null)
    const selectedOption = LOCATIONS.find((option) => option.value === _parentValue)
    const children = selectedOption?.children
    if (!children?.length) setValue(null)
    else {
      const notInChildren = children.every((child) => child.value !== value)
      if (notInChildren) setValue(null)
    }
  }, [_parentValue, value])

  const disabled = useMemo(() => !(_parentValue && options.length > 0), [_parentValue, options])

  return (
    <div
      style={{
        marginBottom: '18px',
        opacity: !disabled ? 1 : 0.5,
        pointerEvents: !disabled ? 'auto' : 'none',
      }}
    >
      <label className="field-label">Sub Area</label>
      <div
        style={{
          position: 'relative',
          width: '50%',
        }}
      >
        <select
          style={{ width: '100%', padding: '12px 8px', appearance: 'none' }}
          disabled={disabled}
          value={value ?? ''}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" disabled>
            Select Sub Area
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {value && (
          <span
            style={{
              position: 'absolute',
              fontSize: '18px',
              top: '10px',
              right: '35px',
              cursor: 'pointer',
            }}
            onClick={() => setValue(null)}
          >
            ×
          </span>
        )}

        <span
          style={{
            position: 'absolute',
            fontSize: '22px',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            transform: 'rotate(90deg)',
          }}
        >
          ›
        </span>
      </div>
    </div>
  )
}

export default LocationSelectField
