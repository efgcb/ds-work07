import MainImg from 'assets/images/main-image.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
          <img src={MainImg} alt="O carro perfeito para você " />
        </div>
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
        </div>
      </div>
      <div className="home-button-container">
        <div>
          <Link to="/products">
            <button className="btn btn-primary">
              <p>VER CATÁLOGO</p>
            </button>
          </Link>
        </div>
        <h6>Comece agora a navegar</h6>
      </div>
    </div>
  );
};

export default Home;
