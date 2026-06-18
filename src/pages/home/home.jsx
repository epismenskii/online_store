import { useProductsQuery } from '../../store/products-store'
import Card from '../../ui/card/Card'
import './home.css'
import { InputSearch } from '../../ui/input/Input'
import { useFavoriteToggleMutation } from '../../store/favorite-store'
import {
  useCartButtonMutation,
  useQuantityMutation,
} from '../../store/cart-store'

export const Home = () => {
  const { data, isLoading, isError } = useProductsQuery()
  const favoriteMutation = useFavoriteToggleMutation()
  const cartMutation = useCartButtonMutation()
  const quantityMutation = useQuantityMutation()

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR :(</div>

  return (
    <div className="homeContainer">
      <div className="inputBlock">
        <InputSearch
          className={'input_default'}
          placeholder={'What are you looking for?'}
        />
      </div>
      <div className="cards">
        {data?.data?.map((item) => (
          <Card
            key={item._id}
            isInCart={item.isInCart}
            onCartClick={() =>
              cartMutation.mutate({ productId: item._id, isInCart: false })
            }
            quantity={item.quantity}
            onQuantityChange={(newQty) => {
              if (newQty < 1) return
              quantityMutation.mutate({ productId: item._id, quantity: newQty })
            }}
            isFavorite={item.isFavorite}
            onFavoriteClick={() =>
              favoriteMutation.mutate({
                productId: item._id,
                isFavorite: item.isFavorite,
              })
            }
            className={'card'}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
          >
            Add to cart
          </Card>
        ))}
      </div>
    </div>
  )
}
