import './introduction.style.scss'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'



const Introduction = () => {
    const navigate= useNavigate();

    const navigateSignInNgo = () => {
        navigate('/sign-up/ngo')
    }

    const navigateSignInVolunteers = () => {
        navigate('/sign-up/volunteers')
    }
    
    return (
        <div className='introduction-div'>
            <h1 className='introduction-header'>Are You An NGO Or A Volunteer?</h1>
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
        </div>
    )
}

export default Introduction;