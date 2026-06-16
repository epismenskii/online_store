import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import Button from '../../ui/button/Button'
import { Modal } from '../modalWindow/modalWindow'
import { useState } from 'react'
import { useAuth } from '../../hooks/use-auth'
import { useLogoutMutation } from '../../store/auth-store'

const Header = () => {
  const isAuth = useAuth((state) => state.isAuth)
  const navigate = useNavigate()
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { mutate, isPending } = useLogoutMutation()

  const pages = [
    { key: '/', label: 'Home' },
    { key: '/basket', label: 'Basket' },
    { key: '/favorites', label: 'Favorites' },
    { key: '/orders', label: 'Orders' },
  ]

  return (
    <div className="container">
      <div className="header">
        <div className="logo" onClick={() => navigate('/')}>
          <span>MyShop</span>
        </div>
        <nav>
          <div className="header-nav">
            {pages.map((page) => (
              <Button
                key={page.key}
                className={
                  location.pathname === page.key ? 'nav current' : 'nav'
                }
                onClick={() => navigate(page.key)}
              >
                {page.label}
              </Button>
            ))}
          </div>
        </nav>

        {isAuth ? (
          <div className="signInBtn">
            <Button
              className={'default'}
              onClick={() => {
                mutate()
                setIsModalOpen(false)
              }}
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="signInBtn">
            <Button className={'default'} onClick={() => setIsModalOpen(true)}>
              Sign in
            </Button>
          </div>
        )}
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default Header
