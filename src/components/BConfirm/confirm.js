import "../BConfirm/confirm.css";
import BusDetails from "../busDetails/busDetails.js";


function Confirm() {
  return (
    <div className="booking-confirm-container">
      <div className="booking-content">
        <div className="booking-header">
          <div className="check-symbol">
            <i class="uil uil-check"></i>
          </div>
          <h2>Booking has been confirmed</h2>
          <p>Ticket ID: 58UHRFT</p>
          <p>Payment ID: 2545-326E3-700H</p>
          <p>Passanger Details: Rajj Danush</p>
          <p>Contact Details: 9022292781</p>
        </div>
        <div className="booking-footer">
            <div className='buss-details'>

            <BusDetails />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
