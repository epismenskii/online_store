import { EmptyPageComponent } from '../../components/emptyPageComponent/emptyPageComponent'
import {
  useCartButtonMutation,
  useQuantityMutation,
} from '../../store/cart-store'
import { useFavoriteToggleMutation } from '../../store/favorite-store'
import { useFavoritesQuery } from '../../store/products-store'
import Card from '../../ui/card/Card'
import './favorites.css'

export const Favorites = () => {
  const { data, isLoading, isError } = useFavoritesQuery()
  const favoriteMutation = useFavoriteToggleMutation()
  const cartMutation = useCartButtonMutation()
  const quantityMutation = useQuantityMutation()

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR :(</div>

  if (!data?.data?.products?.length)
    return <EmptyPageComponent text={'favorites'} />

  return (
    <div className="favoritesContainer">
      <div className="cards">
        {data?.data?.products?.map((item) => (
          <Card
            key={item._id}
            isFavorite={item.isFavorite ?? true}
            onFavoriteClick={() =>
              favoriteMutation.mutate({
                productId: item._id,
                isFavorite: item.isFavorite ?? true,
              })
            }
            onCartClick={() =>
              cartMutation.mutate({ productId: item._id, isInCart: false })
            }
            quantity={item.quantity}
            onQuantityChange={(newQty) => {
              if (newQty < 1) return
              quantityMutation.mutate({ productId: item._id, quantity: newQty })
            }}
            className={'card'}
            image={item.image}
            title={item.name}
            description={item?.description}
            price={item.price}
          >
            Add to cart
          </Card>
        ))}
      </div>
    </div>
  )
}
