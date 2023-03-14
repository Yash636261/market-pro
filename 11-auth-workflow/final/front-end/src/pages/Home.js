import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Redirect to="/profile" />}
      <Wrapper className="page">
        <div className="info">
          <h2>
            <span>Market-</span>
            Pro
          </h2>
          <p>
            Market-Pro is the premier online destination for individuals and
            businesses looking to buy or sell projects. With a wide range of
            categories, from graphic design and software development to
            marketing and writing
          </p>
          <p>
            Market-Pro connects talented freelancers and skilled professionals
            with clients in need of their services. Whether you're a seasoned
            entrepreneur or a newcomer to the industry, Market-Pro makes it easy
            to find the perfect project or sell your own work to interested
            buyers.
          </p>

          {/* <Link to='/login' className='btn'>
            Login
          </Link>
          <Link to='/register' className='btn'>
            Register
          </Link> */}

          <div style={{ display: "flex" }}>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
