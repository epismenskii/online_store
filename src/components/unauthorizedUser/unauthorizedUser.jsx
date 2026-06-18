import { useState } from 'react'
import Button from '../../ui/button/Button'
import { Modal } from '../modalWindow/modalWindow'
import './style.css'

export const UnauthorizedUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="signInNotificatonContainer">
      <div className="signInNotification">
        <p>Sign in to add products to favorites</p>
        <div className="signInBtn">
          <Button className={'default'} onClick={() => setIsModalOpen(true)}>
            Sign in
          </Button>
        </div>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  )
}
