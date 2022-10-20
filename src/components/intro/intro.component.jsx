import './intro.style.scss'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

const Intro = () => {
    const navigate= useNavigate();

    const navigateSignInNgo = () => {
        navigate('/sign-up/ngo')
    }

    const navigateSignInVolunteers = () => {
        navigate('/sign-up/volunteers')
    }
    
    return (
        <div className='introduction-div'>
            <h3>Welcome</h3>
            <h6>Our vision is to connent NGO's with Volunteers in order to make the world a better place</h6>
            <h1 className='introduction-header'>Are You An NGO Or A Volunteer?</h1>
            <h6>If you are new sign up now</h6>
            <div className='btn-container'>
                <Button 
                    className="introduction-btn1" 
                    variant="dark" size="sm" 
                    type='button'
                    onClick={navigateSignInNgo}
                    >NGO</Button>
                <Button 
                    className="introduction-btn2" 
                    variant="dark" 
                    size="sm" 
                    type='button'
                    onClick={navigateSignInVolunteers}
                    >Volunteer</Button>
            </div>
            <h5>Already have an account?</h5>
            <Button 
                    className="introduction-btn3" 
                    variant="success" 
                    size="sm" 
                    type='button'
                    onClick={navigateSignInVolunteers}
                    >Sign In</Button>
        </div>
    )
}

export default Intro;