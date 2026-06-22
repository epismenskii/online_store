import { useState } from 'react'

export const useOrderForm = () => {
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [comment, setComment] = useState('')
  const [touched, setTouched] = useState({})

  const errors = {
    deliveryAddress:
      deliveryAddress.trim() === '' ? 'Укажите адрес доставки' : '',
  }

  const isValid = Object.values(errors).every((e) => e === '')

  const handleBlur = (field) =>
    setTouched((prev) => ({ ...prev, [field]: true }))

  const reset = () => {
    setDeliveryAddress('')
    setComment('')
    setTouched({})
  }

  return {
    deliveryAddress,
    setDeliveryAddress,
    comment,
    setComment,
    errors,
    touched,
    handleBlur,
    isValid,
    reset,
  }
}
