import { useEffect } from 'react'

interface ToastProps {
  message: string
  detail?: string
  onClose: () => void
}

export function Toast({ message, detail, onClose }: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 4000)
    return () => window.clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toast__icon" aria-hidden="true">
        ✓
      </div>
      <div className="toast__body">
        <p className="toast__title">{message}</p>
        {detail && <p className="toast__detail">{detail}</p>}
      </div>
      <button type="button" className="toast__close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  )
}
