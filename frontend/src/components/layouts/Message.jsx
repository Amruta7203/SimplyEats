import React from 'react'

export default function message({variant, children}) {
  return (
    <div className={`alert alert-${variant}`}>
        {children}
    </div>
  )
}
