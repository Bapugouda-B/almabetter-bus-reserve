import "../busDetails/busDetails.css";

function BusDetails() {
  return (
    <div className="booking-container">
        <div className="bus-content">
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
          <div className="travel-from-to">
            <div className="traveling-content">
              <p>Bengaluru</p>
              <span>Anand Rao Circle</span>
            </div>
            <div className="traveling-content">
              <div className="traveling-from">
                <p>Mysore</p>
                <span>Bus Stop, Near Temple</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BusDetails;
