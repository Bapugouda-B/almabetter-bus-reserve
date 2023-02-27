import Footer from "../../components/footer/footer.js";
import Navbar from "../../components/navbar/navbar.js";
import Sidebar from "../../components/sidebar/sidebar.js";
import SearchBus from "../../components/searchBus/searchBus.js";
import "../buses/buses.css";

function Buses() {
  return (
    <div className="bus-list">
      <Navbar />
      <div className="search-items">
        <div className="search-items-container">
          <div className="bus-sidebar">
            <Sidebar />
          </div>
          <div className="bus-search">
            <SearchBus />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Buses;
