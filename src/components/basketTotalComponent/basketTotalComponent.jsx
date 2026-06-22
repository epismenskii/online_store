import { useState } from 'react'
import Button from '../../ui/button/Button'
import { OrderModal } from '../orderModal/orderModal'
import './style.css'

export const BasketTotalComponent = ({ total, cartItems, onOrderSuccess }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const delivery = 500

  return (
    <div className="summary">
      <h2 className="summaryTitle">Summary</h2>
      <div className="summaryRow">
        <span>Subtotal</span>
        <span>{total} Som</span>
      </div>
      <div className="summaryRow">
        <span>Delivery</span>
        <span>{delivery} Som</span>
      </div>
      <hr className="summaryDivider" />
      <div className="summaryRow total">
        <b>Total</b>
        <b>{total + delivery} Som</b>
      </div>
      <Button className={'default'} onClick={() => setIsOrderModalOpen(true)}>
        Place Order
      </Button>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        total={total + delivery}
        onOrderSuccess={onOrderSuccess}
      />
    </div>
  )
}
