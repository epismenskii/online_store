import { useNavigate } from 'react-router-dom'
import { useCreateOrderMutation } from '../../store/order-store'
import { useState } from 'react'
import { Input } from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import './style.css'

export const OrderModal = ({
  isOpen,
  onClose,
  cartItems,
  total,
  onOrderSuccess,
}) => {
  const navigate = useNavigate()
  const createOrderMutation = useCreateOrderMutation()

  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [comment, setComment] = useState('')
  const [touched, setTouched] = useState(false)

  const addressError =
    deliveryAddress.trim() === '' ? 'Enter delivery address' : ''
  const isValid = addressError === ''

  const reset = () => {
    setDeliveryAddress('')
    setComment('')
    setTouched(false)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleSubmit = () => {
    setTouched(true)
    if (!isValid) return

    const orderData = {
      items: cartItems.map((item) => ({
        productId: item?.product._id,
        quantity: item?.quantity,
        price: item?.product?.price,
      })),
      deliveryAddress,
      comment,
    }

    createOrderMutation.mutate(orderData, {
      onSuccess: () => {
        reset()
        onOrderSuccess?.()
        onClose()
        navigate('/orders')
      },
    })
  }

  if (!isOpen) return null

  return (
    <div className="modalContainer" onClick={handleClose}>
      <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
        <div className="orderModalHeader">
          <h1 className="orderModal_title">Checkout</h1>
          <Button className={'default red'} onClick={handleClose}>
            X
          </Button>
        </div>

        <div className="orderForm">
          <div className="orderFormField">
            <Input
              className="input_default"
              placeholder="Delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              onBlur={() => setTouched(true)}
            />
            {touched && addressError && (
              <span className="orderFormError">{addressError}</span>
            )}
          </div>

          <div className="orderForm__field">
            <Input
              className="input_default"
              placeholder="Comment (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="orderTotal">
            <span>Total</span>
            <b>{total} Som</b>
          </div>

          <Button
            className="default"
            onClick={handleSubmit}
            disabled={createOrderMutation.isPending}
          >
            {createOrderMutation.isPending ? 'Submitting...' : 'Place order'}
          </Button>
        </div>
      </div>
    </div>
  )
}
