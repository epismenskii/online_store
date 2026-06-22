import { EmptyPageComponent } from '../../components/emptyPageComponent/emptyPageComponent'
import { useBasketQuery } from '../../store/products-store'
import {
  useCartButtonMutation,
  useQuantityMutation,
} from '../../store/cart-store'
import { BasketTotalComponent } from '../../components/basketTotalComponent/basketTotalComponent'
import Card from '../../ui/card/Card'
import './basket.css'

export const Basket = () => {
  const { data, isLoading, isError } = useBasketQuery()
  const cartButtonMutation = useCartButtonMutation()
  const quantityMutation = useQuantityMutation()
  const total = data?.data?.items?.reduce((sum, item) => {
    return sum + item?.product?.price * item?.quantity
  }, 0)

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR :(</div>

  if (!data?.data?.items?.length) return <EmptyPageComponent text={'basket'} />

  return (
    <div className="basketContainer">
      <div className="cartContainer">
        <div className="cardsCart">
          {data?.data?.items?.map((item) => (
            <Card
              key={item.product._id}
              isInCart={true}
              showFavorite={false}
              onCartClick={() =>
                cartButtonMutation.mutate({
                  productId: item.product._id,
                  isInCart: true,
                })
              }
              quantity={item.quantity}
              onQuantityChange={(newQty) => {
                if (newQty < 1) return
                quantityMutation.mutate({
                  productId: item.product._id,
                  quantity: Number(newQty),
                })
              }}
              className={'cartCard'}
              image={item.product.image}
              title={item.product.name}
              description={item.product.description}
              price={item.product.price}
            >
              Remove
            </Card>
          ))}
        </div>
      </div>
      <BasketTotalComponent total={total} cartItems={data?.data?.items} />
    </div>
  )
}
