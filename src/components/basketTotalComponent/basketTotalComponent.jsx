import Button from '../../ui/button/Button'
import './style.css'

export const BasketTotalComponent = ({ total }) => {
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
      <Button className={'default'}>Place Order</Button>
    </div>
  )
}
