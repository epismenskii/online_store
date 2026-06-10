import "./card.css"
import Button from '../button/Button'

const Card = ({ image, title, description, price, className, children, icon }) => {
  return (
    <div className={className}>
        <Button className={"default favoriteBtn"}>
          <img className='icon' src={icon} alt="favorite" />
        </Button>
        <img className='card_img' src={image} alt="image" />
        <h2 className='card_title'>{title}</h2>
        <p className='card_description'>{description}</p>
        <span className='card_price'>{price} Som</span>
        <Button className={"default"}>{children}</Button>
    </div>
  )
}

export default Card