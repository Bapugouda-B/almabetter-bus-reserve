import BusDetails from "../busDetails/busDetails.js";
import "./travelDetails.css";
import { Link } from "react-router-dom";

function BookingDetails() {
  return (
    <>
    <div className="travelDetails-container">
      <div className="travelDetails-payment">
        <div className="travelDetails-card">
          <div className="selected-bus-details">
            <BusDetails />
          </div>
          <div className="enter-traveler-details">
            <h4>Enter Traveler Details</h4>
            <div className="traveler-details-container">
              <span>Passanger1 Seat16</span>
              <div className="traveler-details">
                <div className="traveler-content">
                  <div className="traveler-name">
                    <p>Name</p>
                    <input type="text" />
                  </div>
                  <div className="traveler-gender">
                    <p>Gender</p>
                    <input type="text" />
                  </div>
                  <div className="traveler-age">
                    <p>Age (in yrs)</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="traveler-content">
                  <div className="traveler-email">
                    <p>EmailID</p>
                    <input type="text" />
                  </div>
                  <div className="traveler-mobile">
                    <p>Mobile No</p>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fareDetails-container">
          <div className="fareDetails-content">
            <p>Fare Details</p>
            <div className="base-fare">
              <p>Base Fare</p>
              <span>₹ 799</span>
            </div>
            <div className="total-tax">
              <p>Tax</p>
              <span>₹ 799</span>
            </div>
            <div className="offer">
              <p>Offer applied</p>
              <span>₹ 799</span>
            </div>
          </div>
          <div className="total-price-container">
            <div className="total-price">
              <p>Total Price</p>
              <span>₹ 899</span>
            </div>
            <Link to="/payment-status">
              <button className="proceed-payment">Proceed To Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BookingDetails;
