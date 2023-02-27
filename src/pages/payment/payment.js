import Footer from '../../components/footer/footer.js';
import Navbar from '../../components/navbar/navbar.js';
import BookingDetails from '../../components/travelDetails/travelDetails.js';


import '../payment/payment.css';


function Payment () {
    return (
    <div className='payment-container'>
        <Navbar />
        <BookingDetails />

        <div className=''>
            <Footer />
        </div>
    </div>
        );
}

export default Payment;