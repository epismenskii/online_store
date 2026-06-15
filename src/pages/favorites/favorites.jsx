import { useNavigate } from "react-router-dom"
import { useFavoriteToggleMutation } from "../../store/favorite-store"
import { useFavoritesQuery } from "../../store/products-store"
import Button from "../../ui/button/Button"
import Card from "../../ui/card/Card"
import "./favorites.css"
import { useState } from "react"
import { Modal } from "../../components/modalWindow/modalWindow"

export const Favorites = () => {
  const { data, isLoading, isError, error } = useFavoritesQuery()
  const favoriteMutation = useFavoriteToggleMutation()
  const navigate = useNavigate()
  const [ isModalOpen, setIsModalOpen] = useState(false)

  if (isLoading) return <div>LOADING...</div>

  if (isError && error?.response?.status === 401) return <div className="signInNotification">
    <p>Sign in to add products to favorites</p>
    <div className='signInBtn'>
        <Button
                className={"default"}
                onClick={() => setIsModalOpen(true)}
                >
                    Sign in
        </Button>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}/>}
  </div>

  if (isError) return <div>ERROR :(</div>
  
  if (!data?.data?.products?.length) return <div className="addToFavoriteNotification">
    <p>You don't have any products in your favorites yet</p>
    <Button className={"default"} onClick={() => navigate("/")}>Go to catalog</Button>
  </div>


  return (
    <div className='favoritesContainer'>
      <div className='cards'>
          {data?.data?.products?.map((item) => (
            <Card key={item._id}
            isFavorite={item.isFavorite ?? true}
              onFavoriteClick={() => 
                favoriteMutation.mutate({
                  productId: item._id,
                  isFavorite: item.isFavorite ?? true
                })
              }
            className={"card"}
            image={item.image}
            title={item.name}
            description={item?.description}
            price={item.price}>
              Add to cart
            </Card>
          ))}
      </div>
    </div>
  )
}

