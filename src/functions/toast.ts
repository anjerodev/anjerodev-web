import { $ } from '@/lib/dom-selector'

interface ToastOptions {
  message: string
  severity?: 'success' | 'error' | 'warning' | 'info'
  dismissible?: boolean
}

interface ToasterOptions {
  maxToasts: number
  toastLife: number
  currentToasts: number
}

interface ToastProps {
  options: ToasterOptions
  add: (toast: ToastOptions) => void
  remove: (id: string) => void
}

export const toast: ToastProps = {
  options: {
    maxToasts: 1,
    toastLife: 3000,
    currentToasts: 0,
  },
  add({ message, severity = 'info', dismissible }) {
    let toaster = $('#toaster')

    if (toaster == null) {
      toaster = document.createElement('div')
      toaster.id = 'toaster'
      toaster.className = 'toaster'
      document.body.appendChild(toaster)

      if ($('#toasterRack') == null) {
        const rack = document.createElement('ul')
        rack.id = 'toasterRack'
        rack.className = 'rack'
        toaster.appendChild(rack)
      }
    }

    // Check if there are too many toasts on the screen
    if (this.options.currentToasts >= this.options.maxToasts) {
      // there are too many toasts on the screen, delete the oldest one
      const oldestToast = $('#toasterRack')?.firstChild
      if (oldestToast) $('#toasterRack')?.removeChild(oldestToast)
      this.options.currentToasts--
    }

    // Create the toast
    const toast = document.createElement('div')
    this.options.currentToasts++
    toast.id = `toast-${this.options.currentToasts}`
    toast.className = `toast ${severity} toastUp`

    $('#toasterRack')?.appendChild(toast)

    const toastIcon = document.createElement('span')
    toastIcon.className = `icon ${severity}`
    toast.appendChild(toastIcon)

    switch (severity) {
      case 'success':
        toastIcon.innerHTML =
          "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' role='img'>" +
          "<path d='M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.13599C16.323 9.42899 16.323 9.90402 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.73801 11.177 9.03101 11.47L10.834 13.273L14.97 9.13702C15.263 8.84402 15.737 8.84399 16.03 9.13599Z' fill='currentColor'></path>" +
          '</svg>'
        break
      case 'error':
        toastIcon.innerHTML =
          "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' role='img'>" +
          "<path d='M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM15.53 9.53003L13.06 12L15.53 14.47C15.823 14.763 15.823 15.238 15.53 15.531C15.384 15.677 15.192 15.751 15 15.751C14.808 15.751 14.616 15.678 14.47 15.531L12 13.061L9.53 15.531C9.384 15.677 9.192 15.751 9 15.751C8.808 15.751 8.616 15.678 8.47 15.531C8.177 15.238 8.177 14.763 8.47 14.47L10.94 12L8.47 9.53003C8.177 9.23703 8.177 8.76199 8.47 8.46899C8.763 8.17599 9.23801 8.17599 9.53101 8.46899L12.001 10.939L14.471 8.46899C14.764 8.17599 15.239 8.17599 15.532 8.46899C15.823 8.76199 15.823 9.23803 15.53 9.53003Z' fill='currentColor'></path>" +
          '</svg>'
        break
      case 'warning':
        toastIcon.innerHTML =
          "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' role='img'>" +
          "<path d='M18.6918 22.75H5.30804C3.86904 22.75 2.56904 22.014 1.82904 20.781C1.09204 19.551 1.05589 18.0621 1.73089 16.7981L8.33685 4.44312C9.06985 3.07012 10.44 2.25098 11.998 2.25098C13.556 2.25098 14.9259 3.07012 15.6589 4.44312L22.2648 16.7981C22.9418 18.0621 22.9059 19.551 22.1679 20.781C21.4329 22.014 20.1318 22.75 18.6918 22.75ZM11.9999 3.75C11.0039 3.75 10.1298 4.27293 9.66082 5.14893L3.05487 17.5039C2.62987 18.2989 2.65388 19.235 3.11688 20.009C3.58288 20.786 4.40202 21.249 5.30902 21.249H18.6931C19.6 21.249 20.4199 20.785 20.8849 20.009C21.3479 19.236 21.37 18.2999 20.946 17.5039L14.34 5.14893C13.87 4.27293 12.9959 3.75 11.9999 3.75ZM12.7499 14V10C12.7499 9.586 12.4139 9.25 11.9999 9.25C11.5859 9.25 11.2499 9.586 11.2499 10V14C11.2499 14.414 11.5859 14.75 11.9999 14.75C12.4139 14.75 12.7499 14.414 12.7499 14ZM13.02 17C13.02 16.448 12.573 16 12.02 16H12.0099C11.4579 16 11.0148 16.448 11.0148 17C11.0148 17.552 11.468 18 12.02 18C12.572 18 13.02 17.552 13.02 17Z' fill='currentColor'></path>" +
          '</svg>'
        break
      case 'info':
        toastIcon.innerHTML =
          "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' role='img'>" +
          "<path d='M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75ZM12.75 16.5V11.929C12.75 11.515 12.414 11.179 12 11.179C11.586 11.179 11.25 11.515 11.25 11.929V16.5C11.25 16.914 11.586 17.25 12 17.25C12.414 17.25 12.75 16.914 12.75 16.5ZM13.02 8.5C13.02 7.948 12.573 7.5 12.02 7.5H12.01C11.458 7.5 11.0149 7.948 11.0149 8.5C11.0149 9.052 11.468 9.5 12.02 9.5C12.572 9.5 13.02 9.052 13.02 8.5Z' fill='currentColor'></path>" +
          '</svg>'
        break
    }

    const toastMessage = document.createElement('p')
    toastMessage.className = 'message'
    toastMessage.innerHTML = message || ''
    toast.appendChild(toastMessage)

    if (dismissible) {
      toast.className += ' dismissible'

      toast.addEventListener('click', () => {
        this.remove(toast.id)
      })
    }

    // remove the entrance animation class after the animation has finished
    setTimeout(() => {
      toast.className = toast.className.replace(' toastUp', '')
    }, 500)

    setTimeout(() => {
      this.remove(toast.id)
    }, this.options.toastLife)
  },
  remove(toastId) {
    const toast = $(`#${toastId}`)

    if (toast) {
      toast.className += ' fadeOutToast'
      setTimeout(() => {
        try {
          toast.style.opacity = '0'
          toast.parentNode?.removeChild(toast)
          this.options.currentToasts--
        } catch {}
        // if this was the last toast on the screen, remove the toaster
        if (this.options.currentToasts === 0) {
          const toaster = $('#toaster')
          if (toaster) toaster.parentNode?.removeChild(toaster)
        }
      }, 500)
    }
  },
}
