// import { useState } from "react";
import "../searchBus/searchBus.css";
import { Link } from "react-router-dom";

function SearchBus() {
  return (
    <div className="search-bus">
      <div className="bus-container">
        <div className="search-bus-container">
          <div className="left-side-content">
            <div className="bus-details">
              <p className="bus-name">InterCity Smart Bus</p>
              <div className="search-bus-rating">
                <i class="uil uil-star"></i>
                <span>4.5</span>
              </div>
              <span>Ratings</span>
            </div>
            <div className="booking-types">
              <p>A/C Sleeper(2+1) | 24 Seats Left | 0 Windows Left</p>
            </div>
            <div className="bus-date-time">
              <p>22:45, 16 NOV </p>
              <small className="bus-time">07 hrs 59mins </small>
              <p>08:20, 17 NOV</p>
            </div>
            <div className="extra-services">
              <a href="/">
                <p>Live Tracking</p>
              </a>
              <a href="/">
                <p>Policies</p>
              </a>
              <a href="/">
                <p>Photos</p>
              </a>
              <a href="/">
                <p>Amenities</p>
              </a>
              <a href="/">
                <p>Reviews</p>
              </a>
            </div>
          </div>
          <div className="right-side-content">
            <p>Trip Cost</p>
            <span>Starting From</span>
            <h2>₹899</h2>
            <button className="view-btn">View Seat</button>
          </div>
        </div>
        <div className="bus-seat-container">
          <div className="bus-seat-container-show">
            <div className="seat-prize-container">
              <h3>Select Seats</h3>
              <div className="seat-prize-content">
                <div className="seat-prize-details">
                  <span>Seat Price</span>
                  <div className="seat-prize">
                    <input type="radio" />
                    <span>All</span>
                  </div>
                  <div className="seat-prize">
                    <input type="radio" />
                    <span>₹ 689</span>
                  </div>
                  <div className="seat-prize">
                    <input type="radio" />
                    <span>₹ 689</span>
                  </div>
                  <div className="seat-prize">
                    <input type="radio" />
                    <span>₹ 689</span>
                  </div>
                  <div className="seat-prize">
                    <input type="radio" />
                    <span>₹ 689</span>
                  </div>
                </div>
                <div className="seat-avail">
                  <div className="seat-booked">
                    <input type="checkbox" />
                    <span>Seat Booked</span>
                  </div>
                  <div className="seat-booked">
                    <input type="checkbox" />
                    <span>Seat Booked</span>
                  </div>
                  <div className="seat-booked">
                    <input type="checkbox" />
                    <span>Seat Booked</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="seat-type-container">
              <div className="birth-type">
                <div className="birth-container">
                  <div className="birth-name">
                    <p>Upper Birth</p>
                  </div>
                  <div className="birth-seats">
                    <div className="double-seat">
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                    </div>
                    <div className="single-seat">
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-birth-container">
                  <div className="birth-name">
                    <p>Lower Birth</p>
                  </div>
                  <div className="birth-seats">
                    <div className="double-seat">
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                    </div>
                    <div className="single-seat">
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                      <div className="bus-seat">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boarding-drop-container">
                <p>Boarding and Droping</p>
                <div className="pickup-drop-details">
                  <div className="pickup-drop-points">
                    <div className="pickup-container">
                      <div className="pickup-point">
                        <p>Bengaluru</p>
                        <span>Anand Rao Circle</span>
                      </div>
                      <div className="pickup-time">
                        <p>22.45</p>
                      </div>
                    </div>
                    <div className="drop-container">
                      <div className="drop-point">
                        <p>Bengaluru</p>
                        <span>Anand Rao Circle</span>
                      </div>
                      <div className="pickup-time">
                        <p>06.30</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="seat-number">
                  <span>Seat No.</span>
                  <span>7</span>
                </div>
                <hr />
                <div className="amount-container">
                  <p>Fare Details</p>
                  <div className="amount-details">
                    <div className="amount">
                      <p>Amount</p>
                      <span>Taxi stand</span>
                    </div>
                    <div className="total-amount">
                      <p>INR 750.00</p>
                    </div>
                  </div>
                </div>
                <Link to="/payment">
                  <button className="proceed-book">Proceed To Book</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBus;
