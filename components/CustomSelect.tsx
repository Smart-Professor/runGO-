"use client"

import { useState, useRef, useEffect } from "react"

interface SelectOption {
  value: string | number
  label: string
}

interface CustomSelectProps {
  options: SelectOption[]
  value: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  className?: string
}

export default function CustomSelect({ options, value, onChange, placeholder, className = "" }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectedLabel = options.find((o) => o.value === value)?.label || placeholder || ""

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div ref={ref} className={`custom-select ${className}`}>
      <button
        type="button"
        className={`custom-select-trigger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="custom-select-label">{selectedLabel}</span>
        <svg
          className={`custom-select-arrow ${open ? "open" : ""}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="custom-select-menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-option ${value === opt.value ? "selected" : ""}`}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
