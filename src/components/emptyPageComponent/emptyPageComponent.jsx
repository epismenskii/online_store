import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import './style.css'

export const EmptyPageComponent = ({ text }) => {
  const navigate = useNavigate()

  return (
    <div className="addProductNotificationContainer">
      <div className="addProductFavoriteNotification">
        <p>You don't have any products in your {text} yet</p>
        <Button className={'default'} onClick={() => navigate('/')}>
          Go to catalog
        </Button>
      </div>
    </div>
  )
}
