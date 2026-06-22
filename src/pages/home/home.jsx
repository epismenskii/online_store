import {
  useCategoriesQuery,
  useProductsQuery,
} from '../../store/products-store'
import Card from '../../ui/card/Card'
import './home.css'
import { InputSearch } from '../../ui/input/Input'
import { useFavoriteToggleMutation } from '../../store/favorite-store'
import {
  useCartButtonMutation,
  useQuantityMutation,
} from '../../store/cart-store'
import { useProductFilters } from '../../hooks/useProductFilter'
import { FilterPanel } from '../../components/filterPanel/filterPanel'

export const Home = () => {
  const {
    search,
    category,
    minPrice,
    maxPrice,
    searchInput,
    setSearchInput,
    minInput,
    setMinInput,
    maxInput,
    setMaxInput,
    updateParam,
    handleSearch,
    handlePriceApply,
    handleReset,
  } = useProductFilters()

  const { data, isLoading, isError } = useProductsQuery({
    search,
    category,
    minPrice,
    maxPrice,
  })

  const favoriteMutation = useFavoriteToggleMutation()
  const cartMutation = useCartButtonMutation()
  const quantityMutation = useQuantityMutation()

  const { data: categories } = useCategoriesQuery()

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR :(</div>

  return (
    <div className="homeContainer">
      <FilterPanel
        category={category}
        categories={categories}
        minInput={minInput}
        maxInput={maxInput}
        setMinInput={setMinInput}
        setMaxInput={setMaxInput}
        updateParam={updateParam}
        handlePriceApply={handlePriceApply}
        handleReset={handleReset}
      />

      <div className="inputBlock">
        <InputSearch
          className={'input_default'}
          placeholder={'What are you looking for?'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <div className="cards">
        {data?.data?.map((item) => (
          <Card
            key={item._id}
            isInCart={item.isInCart}
            onCartClick={() =>
              cartMutation.mutate({
                productId: item._id,
                isInCart: item.isInCart,
              })
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
