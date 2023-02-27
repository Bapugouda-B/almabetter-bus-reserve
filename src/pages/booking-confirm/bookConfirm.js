import "../booking-confirm/bookConfirm.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Confirm from "../../components/BConfirm/confirm.js";

function BookConfirm(props) {
  return (
    <div className="bus-booked-container">
      <Navbar />
    <Confirm />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BookConfirm;
