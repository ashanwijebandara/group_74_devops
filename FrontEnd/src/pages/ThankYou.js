import { Navbar } from '../controllers/Navbar';
import Footer from '../controllers/Footer';

export const ThankYou = () =>{
    return(
        
        <div className='dashfull'>
        <div className="background_image-other">
            <Navbar/>
            <div className='thankyou-content'>
            <h1> Thank You</h1>
                <p>If you give us your empty cylinder you will get 25% discount</p>
            </div>
                
        </div>
        <Footer/>
        </div>
        
    );
};