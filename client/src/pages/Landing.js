import main from "../assets/images/main-alternative.svg";
import { Link } from "react-router-dom";

//style component
import Wrapper from "../assets/wrappers/LandingPage";

//custom component
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      {/* info */}
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, non.
            Obcaecati eius in harum neque, consequatur maxime at ea reiciendis
            quisquam molestias praesentium perspiciatis! Error tempora ducimus
            recusandae dolor nobis.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
