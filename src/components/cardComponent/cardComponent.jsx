import { useProductsQuery } from '../../store/products-store'
import Card from '../../ui/card/Card'
import './style.css'

const CardComponent = () => {
  const { data, isLoading, isError } = useProductsQuery()

  if(isLoading) return <div>LOADING...</div>

  if(isError) return <div>ERROR :(</div>

  return (
    <div className='cardBlock'>
        {data?.data?.map((item) => (
          <Card key={item._id}
          className={"card"}
          isFavorite={item.isFavorite}
          image={item.image}
          title={item.name}
          description={item.description}
          price={item.price}
          >
            Add to cart
          </Card>
        ))}
    </div>
  )
}

export default CardComponent