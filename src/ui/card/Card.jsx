import './card.css'
import Button from '../button/Button'
import heartIcon from '../../icons/heart-regular-full.svg'
import heartIconFull from '../../icons/heart-solid-full-2.svg'
import trashIcon from '../../icons/trash-can-regular-full-2.svg'

const Card = ({
  image,
  title,
  description,
  price,
  className,
  children,
  isFavorite,
  onFavoriteClick,
  isInCart,
  onCartClick,
  quantity,
  onQuantityChange,
  onRemoveClick,
  showFavorite = true,
}) => {
  return (
    <div className={className}>
      {showFavorite && (
        <Button className="default favoriteBtn" onClick={onFavoriteClick}>
          <img className="icon" src={isFavorite ? heartIconFull : heartIcon} />
        </Button>
      )}
      <img className="card_img" src={image} alt="image" />
      <h2 className="card_title">{title}</h2>
      <p className="card_description">{description}</p>
      <span className="card_price">{price} Som</span>
      {isInCart ? (
        <div className="changeBtn">
          <Button
            className={'default'}
            onClick={() =>
              quantity === 1 ? onCartClick() : onQuantityChange(quantity - 1)
            }
          >
            {quantity === 1 ? (
              <img className="icon small" src={trashIcon} />
            ) : (
              '-'
            )}
          </Button>
          {quantity}
          <Button
            className={'default'}
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </Button>
        </div>
      ) : (
        <Button className={'default'} onClick={onCartClick}>
          {children}
        </Button>
      )}
    </div>
  )
}

export default Card
