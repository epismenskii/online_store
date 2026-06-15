import "./card.css"
import Button from '../button/Button'
import heartIcon from '../../icons/heart-regular-full.svg'
import heartIconFull from '../../icons/heart-solid-full.svg'

const Card = ({ image, title, description, price, className, children, isFavorite, onFavoriteClick }) => {
  return (
    <div className={className}>
        <Button className="default favoriteBtn" onClick={onFavoriteClick}>
            <img className="icon" src={isFavorite ? heartIconFull : heartIcon} />
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