import "./home.css"
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header.js";

function Home() {
  return (
    <div className="home-content">
      <Navbar />
      <Header />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
