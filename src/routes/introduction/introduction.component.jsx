import './introduction.style.scss'
import Button from 'react-bootstrap/Button';

const Introduction = () => {
    return (
        <div className='introduction-div'>
            <h1 className='introduction-header'>Are You An NGO Or A Volunteer?</h1>
            <div className='btn-container'>
                <Button className="introduction-btn1" variant="dark" size="sm" type='button'>NGO</Button>
                <Button className="introduction-btn2" variant="dark" size="sm" type='button'>Volunteer</Button>
            </div>
        </div>
    )
}

export default Introduction;