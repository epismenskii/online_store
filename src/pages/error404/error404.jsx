import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import './error404.css'

const Error404 = () => {

    const navigate = useNavigate()

  return (
    <div className='errorContainer'>
        <div className='textBlock'>
            <h1 className='errorTitle'>404 :(</h1>
            <h2 className='errorText'>Sorry, this page does not exist</h2>
        </div>
        <div>
            <Button className={"default"} 
            onClick={() => navigate("/")}>
                Go to home page
            </Button>
        </div>
    </div>
  )
}

export default Error404