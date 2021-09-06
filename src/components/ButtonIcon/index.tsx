import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container">      
        <button className="btn btn-search">
          <p>Digite sua busca</p>
        </button>     
      <div className="btn-icon-container">
        <p>BUSCAR</p>
      </div>
    </div>
  );
};

export default ButtonIcon;
