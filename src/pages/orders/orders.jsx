import { useOrdersQuery } from '../../store/order-store'
import { EmptyPageComponent } from '../../components/emptyPageComponent/emptyPageComponent'
import './orders.css'

export const Orders = () => {
  const { data, isLoading, isError } = useOrdersQuery()

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR :(</div>

  const orders = data?.data || []

  if (!orders.length) return <EmptyPageComponent text={'orders'} />

  return (
    <div className="ordersContainer">
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div className="orderCard" key={order._id}>
          <div className="orderHeader">
            <h2>Order ID: {order._id}</h2>
            <span className="orderStatus">{order.status}</span>
          </div>

          <p className="orderMeta">
            Date: {new Date(order.createdAt).toLocaleDateString()}
          </p>

          <p className="orderMeta">Delivery address: {order.deliveryAddress}</p>

          {order.comment && (
            <p className="orderMeta">Comment: {order.comment}</p>
          )}

          <div className="orderProducts">
            {order.items?.map((item, index) => (
              <div className="orderProduct" key={index}>
                {item.product?.image && (
                  <img
                    src={item.product?.image}
                    alt={item.product?.name || 'Product'}
                  />
                )}

                <div className="orderProductInfo">
                  <h3>{item.product?.name || 'Product unavailable'}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price} Som</p>
                </div>
              </div>
            ))}
          </div>

          <div className="orderTotal">
            <span>Total</span>
            <b>{order.totalPrice} Som</b>
          </div>
        </div>
      ))}
    </div>
  )
}
