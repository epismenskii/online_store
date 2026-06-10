import { useProductsQuery } from '../../store/products-store'
import Card from '../../ui/card/Card'
import "./home.css"
import heartIcon from '../../icons/heart-regular-full.svg'
import Input from '../../ui/input/Input'

export const Home = () => {
  const { data, isLoading, isError } = useProductsQuery()

  if(isLoading) return <div>LOADING...</div>
  if(isError) return <div>ERROR :(</div>

  return (
    <div className='homeContainer'>
      <div className='inputBlock'>
        <Input className={"input_default"} placeholder={"What are you looking for?"}/>
      </div>
      <div className='cards'>
          {data?.data?.map((item) => (
            <Card key={item._id}
            icon={heartIcon}
            className={"card"}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}>
              Add to cart
            </Card>
          ))}
      </div>
    </div>
  )
} 